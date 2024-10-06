import { Injectable } from '@nestjs/common';
import { PurchaseRepository } from './purchase.repository';
import { Purchase, PurchaseCreateData } from './purchase.model';
import { UserService } from '../user/user.service';
import { OfferService } from '../offer/offer.service';
import { AnalyticsService } from '../../shared/analytics/analytics.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

@Injectable()
export class PurchaseService {
	constructor(
		private readonly purchaseRepository: PurchaseRepository,
		private readonly userService: UserService,
		private readonly offerService: OfferService,
		private readonly analyticsService: AnalyticsService,
		@InjectQueue('purchase') private readonly purchaseQueue: Queue
	) {}

	async createPurchase(data: PurchaseCreateData): Promise<Purchase> {
		const [user, offer] = await Promise.all([
			this.userService.findUserById(data.user_id),
			this.offerService.findOfferById(data.offer_id)
		]);

		const purchase = await this.purchaseRepository.create({
			user_id: user.id,
			offer_id: offer.id
		});

		if ('group' in user.marketing_data) {
			await this.analyticsService.send('post', {
				marketing_group: Number(user.marketing_data.gpoup)
			});
		}

		await this.purchaseQueue.add('sendAstrologicalReport', purchase, {
			delay: ONE_DAY_IN_MS
		});

		return purchase;
	}
}
