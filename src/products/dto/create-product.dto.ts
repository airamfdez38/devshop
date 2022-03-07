import { IsString } from "class-validator";

export class CreateProductDto {
    @IsString()
    readonly name: string;
    @IsString()
    readonly brand: string;
    @IsString()
    readonly stock: number;
    @IsString()
    readonly price: number;
    @IsString()
    readonly category: string;
}
