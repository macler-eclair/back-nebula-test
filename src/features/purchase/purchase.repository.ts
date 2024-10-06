import { Injectable } from '@nestjs/common';
import { Purchase, PurchaseCreateData } from './purchase.model';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class PurchaseRepository {
	constructor(private readonly prismaService: PrismaService) {}

	get table() {
		return this.prismaService.purchase;
	}

	async create(data: PurchaseCreateData): Promise<Purchase> {
		const purchase = await this.table.create({
			data: {
				...data,
				status: 'CREATED'
			},
			include: {
				user: true,
				offer: true
			}
		});

		return Purchase.parse(purchase);
	}

	async updateStatus(id: string, status: Purchase['status']): Promise<void> {
		await this.table.update({
			where: {
				id
			},
			data: {
				status
			}
		});
	}
}
