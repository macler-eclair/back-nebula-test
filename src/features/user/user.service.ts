import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, UserCreateData } from './user.model';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(data: UserCreateData): Promise<User> {
		const user = await this.userRepository.create(data);

		return user;
	}

	async findUserById(id: string): Promise<User> {
		const user = await this.userRepository.findById(id);

		if (user == null) {
			throw new HttpException(
				'User does not exist',
				HttpStatus.NOT_FOUND
			);
		}

		return user;
	}
}
