import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return "This action returns all users"
    }
    @Get(':uuid')
    findOne(@Param('uuid') uuid: string){
        return `This action returns #${uuid} user`
    }
    @Post()
    create(@Body() body){
        return body;
    }
    @Patch(':uuid')
    update(@Param('uuid') uuid:string, @Body() body){
        return `This action updates #${uuid} user`
    }
    @Delete(':uuid')
    remove(@Param('uuid') uuid:string){
        return `This action removes #${uuid} user`
    }


}
