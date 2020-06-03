import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchResolver, RocketResolver } from './launch.resolver';

@Module({
  providers: [LaunchService, LaunchResolver, RocketResolver]
})
export class LaunchModule { }
