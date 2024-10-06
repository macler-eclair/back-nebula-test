import { Processor, Process } from '@nestjs/bull';
import { PurchaseRepository } from './purchase.repository';
import { Job } from 'bullmq';
import { MailerService } from '../../shared/mailer/mailer.service';
import { Purchase } from './purchase.model';
import { ServiceUnavailableException } from '@nestjs/common';

@Processor('purchase')
export class PurchaseProcessor {
	constructor(
		private readonly purchaseRepository: PurchaseRepository,
		private readonly mailerService: MailerService
	) {}

	@Process('sendAstrologicalReport')
	async sendAstrologicalReport(job: Job<Purchase>) {
		const purchase = job.data;
		await this.purchaseRepository.updateStatus(purchase.id, 'PENDING');

		try {
			await this.mailerService.send('post', { html: '' });
		} catch (err) {
			await this.purchaseRepository.updateStatus(purchase.id, 'ERROR');

			throw new ServiceUnavailableException(err);
		}

		await this.purchaseRepository.updateStatus(purchase.id, 'SUCCESS');
	}
}
