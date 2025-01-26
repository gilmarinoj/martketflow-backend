import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query, } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseUpdated } from 'src/common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateSupplierDto, 'suppliers')
  create(@Body() createSupplierDto: CreateSupplierDto) {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll('suppliers')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.suppliersService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne('suppliers')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.suppliersService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateSupplierDto, 'suppliers')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateSupplierDto: UpdateSupplierDto,
  ) {
    return this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted('suppliers')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.suppliersService.remove(id);
  }
}
