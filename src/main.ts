import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ZodFilter } from './common/exceptions/zod-exception.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalFilters(new ZodFilter());

	const PORT = 8080;

	await app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
}
bootstrap();
