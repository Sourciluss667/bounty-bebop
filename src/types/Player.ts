import { SmartAssembly } from ".";

export type Player = {
    id: string;
    address: string;
    name: string;
    image: string;
}

export type PlayerDetails = {
    id: string;
    address: string;
    corpId: string;
    name: string;
    isSmartCharacter: boolean;
    createdAt: number;
    eveBalanceWei: string;
    gasBalanceWei: string;
    image: string;
    smartAssemblies: SmartAssembly[];
}