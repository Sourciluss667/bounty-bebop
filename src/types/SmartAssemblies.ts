
export type SmartAssembly = {
    id: string;
    itemId: number;
    chainId: number;
    stateId: number;
    state: string;
    isOnline: boolean;
    solarSystem: {
        solarSystemId: number;
        solarSystemName: string;
        location: {
            x: number;
            y: number;
            z: number;
        };
    };
    name: string;
    ownerId: string;
    ownerName: string;
    typeId: number;
    assemblyType: string;
}
