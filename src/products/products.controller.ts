import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationDto } from '../common/dtos/pagination/pagination.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseUpdated } from '../common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateProductDto, "products")
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll("products")
  findAll(@Query() paginationDto: PaginationDto) {
    return this.productsService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne("products")
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateProductDto ,"products")
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted("products")
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
