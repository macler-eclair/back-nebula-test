import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository';
import { PrismaModule } from '../../shared/prisma/prisma.module';

@Module({
	imports: [PrismaModule],
	controllers: [OfferController],
	providers: [OfferService, OfferRepository],
	exports: [OfferService]
})
export class OfferModule {}
