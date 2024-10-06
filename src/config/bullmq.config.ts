import * as env from 'env-var';

export default () => ({
	url: env.get('REDIS_URL').required().asString()
});
