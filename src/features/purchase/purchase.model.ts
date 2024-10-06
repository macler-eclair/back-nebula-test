import { z } from 'zod';
import { User } from '../user/user.model';
import { Offer } from '../offer/offer.model';

export const Purchase = z.object({
	id: z.string().uuid(),
	status: z.enum(['CREATED', 'PENDING', 'ERROR', 'SUCCESS']),
	user: User,
	offer: Offer,
	created_at: z.string()
});

export type Purchase = z.infer<typeof Purchase>;

export const PurchaseCreateData = z.object({
	user_id: z.string(),
	offer_id: z.string()
});

export type PurchaseCreateData = z.infer<typeof PurchaseCreateData>;
