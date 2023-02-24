import { Controller, Get, UseGuards } from '@nestjs/common';
import { HealthService } from './health.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  // @Roles('creator', 'business')
  checkHealth() {
    return this.healthService.check();
  }
}
