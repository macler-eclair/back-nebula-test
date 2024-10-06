import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OfferRepository } from './offer.repository';
import { Offer } from './offer.model';

@Injectable()
export class OfferService {
	constructor(private readonly offerRepository: OfferRepository) {}

	async findOfferById(id: string): Promise<Offer> {
		const offer = await this.offerRepository.findById(id);

		if (offer == null) {
			throw new HttpException(
				'Offer does not exist',
				HttpStatus.NOT_FOUND
			);
		}

		return offer;
	}
}
