import { z } from 'zod';

export const User = z.object({
	id: z.string().uuid(),
	first_name: z.string(),
	last_name: z.string(),
	email: z.string().email(),
	marketing_data: z.object({}).passthrough()
});

export type User = z.infer<typeof User>;

export const UserCreateData = User.omit({ id: true });
export type UserCreateData = z.infer<typeof UserCreateData>;
