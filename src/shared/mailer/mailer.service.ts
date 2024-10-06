import { Injectable, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import got from 'got';
import { z } from 'zod';

const MailerData = z.object({
	html: z.string()
});

export type MailerData = z.infer<typeof MailerData>;

@Injectable()
export class MailerService {
	readonly #url: string;
	constructor(private configService: ConfigService) {
		const url = this.configService.get<string>('mailer.url');

		if (url == null) {
			throw new ServiceUnavailableException('Config: mailer.url is null');
		}

		this.#url = url;
	}

	async send(path: string, data: MailerData): Promise<void> {
		await got.post(`${this.#url}/${path}`, {
			json: data
		});
	}
}
