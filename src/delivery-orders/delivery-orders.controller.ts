import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { DeliveryOrdersService } from './delivery-orders.service';
import { CreateDeliveryOrderDto } from './dto/create-delivery-order.dto';
import { UpdateDeliveryOrderDto } from './dto/update-delivery-order.dto';
import { PaginationDto } from 'src/common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseUpdated } from 'src/common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('delivery-orders')
export class DeliveryOrdersController {
  constructor(private readonly deliveryOrdersService: DeliveryOrdersService) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateDeliveryOrderDto, 'delivery-orders')
  create(@Body() createDeliveryOrderDto: CreateDeliveryOrderDto) {
    return this.deliveryOrdersService.create(createDeliveryOrderDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll('delivery-orders')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.deliveryOrdersService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne('delivery-orders')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateDeliveryOrderDto, 'delivery-orders')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDeliveryOrderDto: UpdateDeliveryOrderDto,
  ) {
    return this.deliveryOrdersService.update(id, updateDeliveryOrderDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted('delivery-orders')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.deliveryOrdersService.remove(id);
  }
}
