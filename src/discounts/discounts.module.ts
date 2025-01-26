import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountEntity } from './entities/discount.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [DiscountsController],
  providers: [DiscountsService],
  imports: [TypeOrmModule.forFeature([DiscountEntity]),
    UsersModule],
})
export class DiscountsModule {}
