import { Module } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { PaymentMethodsController } from './payment-methods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodEntity } from './entities/payment-method.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PaymentMethodsController],
  providers: [PaymentMethodsService],
  imports: [TypeOrmModule.forFeature([PaymentMethodEntity]),
    UsersModule],
})
export class PaymentMethodsModule {}
