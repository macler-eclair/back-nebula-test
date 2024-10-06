import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ZodPipe } from '../../common/pipes/zod-validation.pipe';
import { UserCreateData } from './user.model';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	post(@Body(new ZodPipe(UserCreateData)) body) {
		return this.userService.createUser(body);
	}
}
