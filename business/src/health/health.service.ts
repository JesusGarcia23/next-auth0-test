import { Injectable } from '@nestjs/common';
import { HealthCheck, HealthCheckResult } from '@nestjs/terminus';

// https://docs.nestjs.com/recipes/terminus

@Injectable()
export class HealthService {
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    const appVersion = 'v1.1';
    return new Promise<HealthCheckResult>((resolve) => {
      return resolve({
        status: 'ok',
        details: {
          appDetails: {
            status: 'up',
            version: appVersion,
          },
        },
      });
    });
  }
}
