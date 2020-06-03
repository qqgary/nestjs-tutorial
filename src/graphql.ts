
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum PatchSize {
    SMALL = "SMALL",
    LARGE = "LARGE"
}

export class Astronaut {
    id: string;
    name: string;
}

export class Launch {
    id: string;
    site?: string;
    mission?: Mission;
    rocket?: Rocket;
}

export class Rocket {
    id: string;
    name?: string;
    type?: string;
    astronauts: Astronaut[];
}

export class Mission {
    id: string;
    name?: string;
    missionPatch?: string;
}

export abstract class IQuery {
    abstract launches(): Launch[] | Promise<Launch[]>;

    abstract launch(id: string): Launch | Promise<Launch>;
}
