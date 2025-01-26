import { Module } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { PurchasesController } from './purchases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseEntity } from './entities/purchase.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService],
  imports: [TypeOrmModule.forFeature([PurchaseEntity]),
    UsersModule],
})
export class PurchasesModule {}
