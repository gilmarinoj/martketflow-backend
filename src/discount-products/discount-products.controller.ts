import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { DiscountProductsService } from './discount-products.service';
import { CreateDiscountProductDto } from './dto/create-discount-product.dto';
import { UpdateDiscountProductDto } from './dto/update-discount-product.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseUpdated } from 'src/common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('discount-products')
@Controller('discount-products')
export class DiscountProductsController {
  constructor(
    private readonly discountProductsService: DiscountProductsService,
  ) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateDiscountProductDto, 'discount-products')
  create(@Body() createDiscountProductDto: CreateDiscountProductDto) {
    return this.discountProductsService.create(createDiscountProductDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll('discount-products')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.discountProductsService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne('discount-products')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateDiscountProductDto, 'discount-products')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateDiscountProductDto: UpdateDiscountProductDto,
  ) {
    return this.discountProductsService.update(id, updateDiscountProductDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted('discount-products')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.discountProductsService.remove(id);
  }
}
