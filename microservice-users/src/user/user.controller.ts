import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserMsg } from '../common/constants';
import { UserDTO } from './dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern(UserMsg.CREATE)
  create(@Payload() userDTO: UserDTO) {
    console.log('userDTO', userDTO);
    return this.userService.create(userDTO);
  }

  @MessagePattern(UserMsg.FIND_ALL)
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern(UserMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.userService.findOne(id);
  }
  @MessagePattern(UserMsg.UPDATE)
  update(@Payload() payload: any) {
    return this.userService.update(payload.id, payload.userDTO);
  }

  @MessagePattern(UserMsg.DELETE)
  delete(@Payload() id: string) {
    return this.userService.delete(id);
  }
}
