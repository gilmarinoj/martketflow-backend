import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

export function ApiResponseRegister<T>( dto: new () => T, nameModule: string) {
  return applyDecorators(
    ApiCreatedResponse({description: `Register ${nameModule}`}),
    ApiOperation({summary: `This  method ${nameModule}`}),
    ApiOkResponse({description: "OK"}),
    ApiConflictResponse({description: "Conflict"}),
    ApiBadRequestResponse({description: "Bad Request"}),
    ApiBody({type: dto}),
    ApiInternalServerErrorResponse({description: "Internal Server Error"})
  );
}