import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name') // Removed the space after the colon
  greet(@Param('name') name: string): string {
    return `hello ${name}`; // Corrected the string interpolation
  }


}
