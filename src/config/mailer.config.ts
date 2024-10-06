import { registerAs } from '@nestjs/config';
import * as env from 'env-var';

export default registerAs('mailer', () => ({
	url: env.get('MAILER_URL').required().asString()
}));
