import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private users : User[] =[
        {
            id: 1,
            name: "Maria",
            surname: "Fernandez",
            dni: "11111111-A",
            email: "maria@correo.es",
            password: "12345678",
            phone: "666222444"
        },
    ];
    findAll(){
        return this.users;
    }
    findOne(id: string){
        const user = this.users.find(item => item.id === +id);
        if(!user){
            throw new NotFoundException(`Usuario #${id} no encontrado`);
        }
        return user;
    }
    create(createUserDto:any){
        this.users.push(createUserDto);
        return CreateUserDto;
    }
    update(id: string, updateUserDto: any){
        const existingUser = this.findOne(id);
        if(existingUser){

        }
    }
    remove(id: string){
        const userIndex = this.users.findIndex(item => item.id === +id);
        if( userIndex >= 0){
            this.users.splice(userIndex, 1);
        }
    }
}

