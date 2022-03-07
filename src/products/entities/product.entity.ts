import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    brand: string;
    @Column()
    stock: number;
    @Column()
    price: number;
    @Column()
    category: string;
    
}