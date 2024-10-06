import { z } from 'zod';

export const Offer = z.object({
	id: z.string().uuid(),
	title: z.string(),
	price: z.number()
});

export type Offer = z.infer<typeof Offer>;

export const OfferCreateData = Offer.omit({ id: true });
export type OfferCreateData = z.infer<typeof OfferCreateData>;
