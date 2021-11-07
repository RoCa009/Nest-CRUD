import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return "It's a User : )";
    }
}
