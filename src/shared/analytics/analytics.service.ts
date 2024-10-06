import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import { z } from 'zod';

const AnalyticsData = z.object({
	marketing_group: z.number()
});

export type AnalyticsData = z.infer<typeof AnalyticsData>;

@Injectable()
export class AnalyticsService {
	readonly #url: string;
	constructor(private configService: ConfigService) {
		const url = this.configService.get<string>('analytics.url');

		if (url == null) {
			throw new ServiceUnavailableException(
				'Config: analytics.url is null'
			);
		}

		this.#url = url;
	}

	async send(path: string, data: AnalyticsData): Promise<void> {
		await got.post(`${this.#url}/${path}`, {
			json: data
		});
	}
}
