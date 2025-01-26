import { Module } from '@nestjs/common';
import { DeliveriesService } from './deliveries.service';
import { DeliveriesController } from './deliveries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryEntity } from './entities/delivery.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DeliveriesController],
  providers: [DeliveriesService],
  imports: [TypeOrmModule.forFeature([DeliveryEntity]),
  UsersModule],
})
export class DeliveriesModule {}
