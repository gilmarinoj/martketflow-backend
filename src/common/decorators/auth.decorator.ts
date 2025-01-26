import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { RoleGuard } from "src/auth/guards/role.guard";
import { ROLES_KEY } from "../constants/keys-roles.constant";
import { AuthGuard } from "src/auth/guards/auth.guard";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { UserRole } from "../enums/user-role.enum";

export function Auth(...roles: Array<keyof typeof UserRole>) {
  return applyDecorators(
    SetMetadata(ROLES_KEY, roles),
    UseGuards(AuthGuard, RoleGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}