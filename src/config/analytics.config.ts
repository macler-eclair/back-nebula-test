import { registerAs } from '@nestjs/config';
import * as env from 'env-var';

export default registerAs('analytics', () => ({
	url: env.get('ANALYTICS_URL').required().asString()
}));
