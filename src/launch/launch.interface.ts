export interface LaunchDoc {
    id: string;
    site?: string;
    missionId?: string;
    rocketId?: string;
}

export interface RocketDoc {
    id: string;
    name?: string;
    type?: string;
    astronautIds: string[];
}

export interface MissionDoc {
    id: string;
    name?: string
    missionPatch?: String
}
export interface AstronautDoc {
    id: string;
    name: string
}

