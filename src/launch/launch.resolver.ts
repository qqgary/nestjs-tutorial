import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { PatchSize } from 'src/graphql';
import { LaunchService } from './launch.service';
import { LaunchDoc, RocketDoc } from './launch.interface';

@Resolver('Launch')
export class LaunchResolver {

    constructor(
        private launchService: LaunchService,
    ) { }

    @Query()
    launch(@Args('id') id: string): LaunchDoc {
        return this.launchService.getLaunch(id);
    }

    @Query()
    launches() {
        return this.launchService.getLaunches();
    }

    @ResolveField()
    rocket(@Parent() { rocketId }: LaunchDoc) {
        return this.launchService.getRocket(rocketId);
    }

    @ResolveField()
    mission(@Parent() { missionId }: LaunchDoc, @Args('patchSize') patchSize: PatchSize) {

        return this.launchService.getMission(missionId, patchSize);
    }



}

@Resolver('Rocket')
export class RocketResolver {

    constructor(
        private launchService: LaunchService,
    ) { }

    @ResolveField()
    astronauts(@Parent() { astronautIds }: RocketDoc) {

        return this.launchService.getAstronauts(astronautIds);
    }

}
