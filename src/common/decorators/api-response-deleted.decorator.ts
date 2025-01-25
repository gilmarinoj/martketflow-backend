import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse, ApiParam } from '@nestjs/swagger';

export function ApiResponseDeleted( nameModule:string ) {
  return applyDecorators(
    ApiOperation({summary: `This  method delete one ${nameModule}`}),
    ApiOkResponse({description: "OK"}),
    ApiBadRequestResponse({description: "Bad Request"}),
    ApiUnauthorizedResponse({description: "Unauthorized"}),
    ApiInternalServerErrorResponse({description: "Internal Server Error"}),
    ApiParam({name: 'id', type: 'string', example: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"})
  );
}