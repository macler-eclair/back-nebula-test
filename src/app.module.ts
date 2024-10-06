import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { OfferModule } from './features/offer/offer.module';
import { PurchaseModule } from './features/purchase/purchase.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { AnalyticsModule } from './shared/analytics/analytics.module';
import { BullModule } from '@nestjs/bull';
import bullmqConfig from './config/bullmq.config';

@Module({
	imports: [
		PrismaModule,
		UserModule,
		OfferModule,
		PurchaseModule,
		AnalyticsModule,
		BullModule.forRoot(bullmqConfig())
	],
	controllers: [],
	providers: []
})
export class AppModule {}
