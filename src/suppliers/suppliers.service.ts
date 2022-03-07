import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
    private suppliers : Supplier[] =[
        {
            id: 1,
            name: "Empresa 1",
            cif: "111111-A",
            address: "Pol.Ind. Salinas",
            email: "empresa_1@correo.es",
            phone: "666777888"
        },
    ];
    findAll(){
        return this.suppliers;
    }
    findOne(id: string){
        const supplier = this.suppliers.find(item => item.id === +id);
        if(!supplier){
            throw new NotFoundException(`Proveedor #${id} no encontrado`);
        }
        return supplier;
    }
    create(createSupplierDto:any){
        this.suppliers.push(createSupplierDto);
        return CreateSupplierDto;
    }
    update(id: string, updateSupplierDto: any){
        const existingSupplier = this.findOne(id);
        if(existingSupplier){

        }
    }
    remove(id: string){
        const supplierIndex = this.suppliers.findIndex(item => item.id === +id);
        if( supplierIndex >= 0){
            this.suppliers.splice(supplierIndex, 1);
        }
    }
}
