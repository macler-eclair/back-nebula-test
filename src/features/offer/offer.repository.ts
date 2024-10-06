import { Injectable } from '@nestjs/common';
import { Offer, OfferCreateData } from './offer.model';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class OfferRepository {
	constructor(private readonly prismaService: PrismaService) {}

	get table() {
		return this.prismaService.offer;
	}

	async create(data: OfferCreateData): Promise<Offer> {
		const user = await this.table.create({
			data
		});

		return Offer.parse(user);
	}

	async findById(id: string): Promise<Offer | null> {
		const user = await this.table.findUnique({
			where: {
				id
			}
		});

		if (user != null) {
			return Offer.parse(user);
		}

		return user;
	}
}
