import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    private products : Product[] =[
        {
            id: 1,
            name: "Camiseta JS",
            brand: "JS",
            stock: 20,
            price: 19,
            category: "Camiseta",
        },
    ];
    findAll(){
        return this.products;
    }
    findOne(id: string){
        const product = this.products.find(item => item.id === +id);
        if(!product){
            throw new NotFoundException(`Producto #${id} no encontrado`);
        }
        return product;
    }
    create(createProductDto:any){
        this.products.push(createProductDto);
        return CreateProductDto;
    }
    update(id: string, updateProductDto: any){
        const existingProduct = this.findOne(id);
        if(existingProduct){

        }
    }
    remove(id: string){
        const productIndex = this.products.findIndex(item => item.id === +id);
        if( productIndex >= 0){
            this.products.splice(productIndex, 1);
        }
    }
}
