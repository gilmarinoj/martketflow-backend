import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { ShippersService } from './shippers.service';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponse } from '@nestjs/swagger';
import { ApiResponseUpdated } from 'src/common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('shippers')
export class ShippersController {
  constructor(private readonly shippersService: ShippersService) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateShipperDto, "shippers")
  create(@Body() createShipperDto: CreateShipperDto) {
    return this.shippersService.create(createShipperDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll("shippers")
  findAll(@Query() paginationDto: PaginationDto) {
    return this.shippersService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne("shippers")
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateShipperDto, "shippers")
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateShipperDto: UpdateShipperDto,
  ) {
    return this.shippersService.update(id, updateShipperDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted("shippers")
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.shippersService.remove(id);
  }
}
