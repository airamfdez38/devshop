import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesController } from './addresses.controller';
import { Address } from './entities/address.entity';
import { AddressesService } from './addresses.service';

@Module({
    imports:[TypeOrmModule.forFeature([Address])],
    controllers:[AddressesController],
    providers: [AddressesService]
})
export class AddressesModule {}
