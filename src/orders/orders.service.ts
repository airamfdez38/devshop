import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
    private orders : Order[] =[
        {
            id: 1,
            date: "2022/03/06",
            amount: 2,
            total: 56,
        },
    ];
    findAll(){
        return this.orders;
    }
    findOne(id: string){
        const order = this.orders.find(item => item.id === +id);
        if(!order){
            throw new NotFoundException(`Pedidio #${id} no encontrado`);
        }
        return order;
    }
    create(createOrderDto:any){
        this.orders.push(createOrderDto);
        return CreateOrderDto;
    }
    update(id: string, updateOrderDto: any){
        const existingOrder = this.findOne(id);
        if(existingOrder){

        }
    }
    remove(id: string){
        const orderIndex = this.orders.findIndex(item => item.id === +id);
        if( orderIndex >= 0){
            this.orders.splice(orderIndex, 1);
        }
    }
}
