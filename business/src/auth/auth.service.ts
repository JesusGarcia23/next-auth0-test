import { Injectable } from '@nestjs/common';
import { BusinessesService } from '../businesses/businesses.service';

@Injectable()
export class AuthService {
  constructor(private businessesService: BusinessesService) {}

  async validateUser(auth0Id: string): Promise<any> {
    console.log('USER!', auth0Id);
    const user = await this.businessesService.findByAuth0Id(auth0Id);
    return null;
  }
}
