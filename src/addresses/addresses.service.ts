import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {
    private addresses : Address[] =[
        {
            id: 1,
            via: "Calle",
            name: "Sol",
            number: "30",
            zip_code: "11500",
            city: "El Puerto de Santa María",
            country: "España"
        },
    ];
    findAll(){
        return this.addresses;
    }
    findOne(id: string){
        const address = this.addresses.find(item => item.id === +id);
        if(!address){
            throw new NotFoundException(`Dorección #${id} no encontrado`);
        }
        return address;
    }
    create(createAddressDto:any){
        this.addresses.push(createAddressDto);
        return CreateAddressDto;
    }
    update(id: string, updateAddressDto: any){
        const existingAddress = this.findOne(id);
        if(existingAddress){

        }
    }
    remove(id: string){
        const addressIndex = this.addresses.findIndex(item => item.id === +id);
        if( addressIndex >= 0){
            this.addresses.splice(addressIndex, 1);
        }
    }
}
