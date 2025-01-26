import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiResponseCreated } from 'src/common/decorators/api-response-created.decorator';
import { ApiResponseRegister } from 'src/common/decorators/api-response-register.decorator';
import { ApiResponseLogin } from 'src/common/decorators/api-response-login.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  @ApiResponseRegister(CreateAuthDto, 'register')
  register(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('login')
  @ApiResponseLogin(LoginAuthDto, 'login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }
}
