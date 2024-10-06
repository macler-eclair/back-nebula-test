import { Injectable } from '@nestjs/common';
import { User, UserCreateData } from './user.model';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class UserRepository {
	constructor(private readonly prismaService: PrismaService) {}

	private get table() {
		return this.prismaService.user;
	}

	async create(data: UserCreateData): Promise<User> {
		const user = await this.table.create({
			data
		});

		return User.parse(user);
	}

	async findById(id: string): Promise<User | null> {
		const user = await this.table.findUnique({
			where: {
				id
			}
		});

		if (user != null) {
			return User.parse(user);
		}

		return user;
	}
}
