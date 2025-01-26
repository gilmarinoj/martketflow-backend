import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntity } from './entities/warehouse.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
  imports: [TypeOrmModule.forFeature([WarehouseEntity]),
  UsersModule],
})
export class WarehousesModule {}
