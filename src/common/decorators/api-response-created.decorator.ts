import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse } from '@nestjs/swagger';
import { CreateCategoryDto } from 'src/categories/dto/create-category.dto';

export function ApiResponseCreated<T>( dto: new () => T, nameModule: string) {
  return applyDecorators(
    ApiCreatedResponse({description: `Create ${nameModule}`}),
    ApiOperation({summary: `This  method create one ${nameModule}`}),
    ApiOkResponse({description: "OK"}),
    ApiConflictResponse({description: "Conflict"}),
    ApiBadRequestResponse({description: "Bad Request"}),
    ApiUnauthorizedResponse({description: "Unauthorized"}),
    ApiBody({type: dto}),
    ApiInternalServerErrorResponse({description: "Internal Server Error"})

  );
}