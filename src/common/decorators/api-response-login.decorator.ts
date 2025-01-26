import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiUnauthorizedResponse } from "@nestjs/swagger";

export function ApiResponseLogin<T>( dto: new () => T, nameModule: string) {
  return applyDecorators(
    ApiOkResponse({description: `Login ${nameModule}`}),
    ApiOperation({summary: `This  method ${nameModule}`}),
    ApiBadRequestResponse({description: "Bad Request"}),
    ApiBody({type: dto}),
    ApiInternalServerErrorResponse({description: "Internal Server Error"})
  );
}