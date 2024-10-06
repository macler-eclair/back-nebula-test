import { Body, Controller, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseCreateData } from './purchase.model';
import { ZodPipe } from '../../common/pipes/zod-validation.pipe';

@Controller('purchase')
export class PurchaseController {
	constructor(private readonly purchaseService: PurchaseService) {}

	@Post()
	post(@Body(new ZodPipe(PurchaseCreateData)) body) {
		return this.purchaseService.createPurchase(body);
	}
}
