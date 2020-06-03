import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { LaunchModule } from './launch/launch.module';
import { AstronautModule } from './astronaut/astronaut.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs:'class'
      },
      playground:true,
      debug:true,
      path:'gql'
    }),
    LaunchModule,
    AstronautModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
