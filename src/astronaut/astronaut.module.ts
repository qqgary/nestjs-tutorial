import { Module } from '@nestjs/common';
import { AstronautService } from './astronaut.service';
import { AstronautResolver } from './astronaut.resolver';

@Module({
  providers: [AstronautService, AstronautResolver]
})
export class AstronautModule {}
