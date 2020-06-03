import { Injectable } from '@nestjs/common';
import { Launch, PatchSize } from 'src/graphql';
import { LaunchDoc, RocketDoc, MissionDoc, AstronautDoc } from './launch.interface';

@Injectable()
export class LaunchService {
    getLaunches() {
        return [
            {
                id: '1',
                site: 'qwer',
                missionId: 'asd',
                rocketId: 'zxc'
            },
            {
                id: '2',
                site: 'qwer',
                missionId: 'asd',
                rocketId: 'zxc'
            },
        ];
    }
    getAstronauts(astronautIds: string[]): AstronautDoc[] {
        return astronautIds.map((id) => ({
            id,
            name: 'gary ' + id
        }));
    }
    getMission(id: string, patchSize: PatchSize): MissionDoc {
        const missionPatch = patchSize == PatchSize.SMALL ? 'small' : 'big';
        return {
            id,
            name: 'GO GO',
            missionPatch
        }
    }
    getRocket(id: string): RocketDoc {
        return {
            id,
            name: 'APOLO',
            type: 'KIHONG',
            astronautIds: ['qwe', 'sdf'],
        }
    }

    getLaunch(id: string): LaunchDoc {
        return {
            id,
            site: 'qwer',
            missionId: 'asd',
            rocketId: 'zxc'
        };
    }

}
