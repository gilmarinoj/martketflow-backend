import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateWarehouseDto, 'warehouses')
  create(@Body() createWarehouseDto: CreateWarehouseDto) {
    return this.warehousesService.create(createWarehouseDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll('warehouses')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.warehousesService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne('warehouses')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseFindAll('warehouses')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateWarehouseDto: UpdateWarehouseDto,
  ) {
    return this.warehousesService.update(id, updateWarehouseDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted('warehouses')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.remove(id);
  }
}
