import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from './config';
import { CreatorsModule } from './creators/creators.module';
import { CreatorCategoryModule } from './creator-category/creator-category.module';
import { ApprovalStatusModule } from './approval-status/approval-status.module';
import { ProfileModule } from './profile/profile.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [appConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const typeormConfig = config.get('typeorm');
        return typeormConfig.options;
      },
    }),
    CreatorsModule,
    CreatorCategoryModule,
    ApprovalStatusModule,
    ProfileModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
