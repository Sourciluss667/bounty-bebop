export type KillReport = {
    victim: {
        address: string;
        name: string;
    };
    killer: {
        address: string;
        name: string;
    };
    solar_system_id: number;
    loss_type: string;
    timestamp: number;
}
