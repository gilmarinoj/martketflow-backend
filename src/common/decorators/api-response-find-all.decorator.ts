import { applyDecorators } from '@nestjs/common';
import { ApiResponse, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiConflictResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiBody, ApiInternalServerErrorResponse } from '@nestjs/swagger';

export function ApiResponseFindAll( nameModule:string ) {
  return applyDecorators(
    ApiOperation({summary: `This  method response all ${nameModule}`}),
    ApiOkResponse({description: "OK"}),
    ApiBadRequestResponse({description: "Bad Request"}),
    ApiUnauthorizedResponse({description: "Unauthorized"}),
    ApiInternalServerErrorResponse({description: "Internal Server Error"}),
  );
}