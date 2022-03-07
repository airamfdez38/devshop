import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoicesService {
    private invoices : Invoice[] =[
        {
            id: 1,
            date: "2022/03/06",
            amount: 120,
            payment_method: "Tajeta crédito",
        },
    ];
    findAll(){
        return this.invoices;
    }
    findOne(id: string){
        const invoice = this.invoices.find(item => item.id === +id);
        if(!invoice){
            throw new NotFoundException(`Factura #${id} no encontrado`);
        }
        return invoice;
    }
    create(createInvoiceDto:any){
        this.invoices.push(createInvoiceDto);
        return CreateInvoiceDto;
    }
    update(id: string, updateInvoiceDto: any){
        const existingInvoice = this.findOne(id);
        if(existingInvoice){

        }
    }
    remove(id: string){
        const userIndex = this.invoices.findIndex(item => item.id === +id);
        if( userIndex >= 0){
            this.invoices.splice(userIndex, 1);
        }
    }
}
