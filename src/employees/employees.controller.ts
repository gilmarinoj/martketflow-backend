import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe, } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PaginationDto } from './../common/dtos/pagination/pagination.dto';
import { AdminAccess } from 'src/auth/decorators/admin.decorator';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { PublicAccess } from 'src/auth/decorators/public.decorator';
import { ApiResponseFindAll } from 'src/common/decorators/api-response-find-all.decorator';
import { ApiResponseFindOne } from 'src/common/decorators/api-response-find-one.decorator';
import { ApiResponseUpdated } from 'src/common/decorators/api-response-updated.decorator';
import { ApiResponseDeleted } from 'src/common/decorators/api-response-deleted.decorator';
import { Auth } from 'src/common/decorators/auth.decorator';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) { }

  @Post()
  @Auth('ADMIN')
  @ApiResponseCreated(CreateEmployeeDto, "employees")
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  @Auth('USER', 'ADMIN')
  @ApiResponseFindAll("employees")
  findAll(@Query() paginationDto: PaginationDto) {
    return this.employeesService.findAll(paginationDto);
  }

  @Get(':id')
  @Auth('USER', 'ADMIN')
  @ApiResponseFindOne("employees")
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @Auth('ADMIN')
  @ApiResponseUpdated(CreateEmployeeDto, "employees")
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  @Auth('ADMIN')
  @ApiResponseDeleted("employees")
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.remove(id);
  }
}
