import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { ConfigModule } from '@nestjs/config';
import analyticsConfig from '../../config/analytics.config';

@Module({
	imports: [ConfigModule.forFeature(analyticsConfig)],
	providers: [AnalyticsService],
	exports: [AnalyticsService]
})
export class AnalyticsModule {}
