import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { PurchaseRepository } from './purchase.repository';
import { UserModule } from '../user/user.module';
import { OfferModule } from '../offer/offer.module';
import { PrismaModule } from '../../shared/prisma/prisma.module';
import { AnalyticsModule } from '../../shared/analytics/analytics.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PurchaseProcessor } from './purchase.processor';
import { MailerModule } from '../../shared/mailer/mailer.module';
import { BullModule } from '@nestjs/bull';

@Module({
	controllers: [PurchaseController],
	providers: [PurchaseService, PurchaseRepository, PurchaseProcessor],
	imports: [
		PrismaModule,
		UserModule,
		OfferModule,
		AnalyticsModule,
		ScheduleModule.forRoot(),
		MailerModule,
		BullModule.registerQueue({
			name: 'purchase'
		})
	]
})
export class PurchaseModule {}
