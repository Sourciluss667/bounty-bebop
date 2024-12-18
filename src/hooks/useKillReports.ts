import { useEffect, useState } from 'react';

import { KillReport } from '../types';

export function useKillReports() {
    const [killReports, setKillReports] = useState<KillReport[]>([]);

    useEffect(() => {
        fetch('https://blockchain-gateway-stillness.live.tech.evefrontier.com/killmails')
            .then(response => response.json())
            .then(data => setKillReports(data))
            .catch(error => console.error('Error fetching kill reports:', error));
    }, []);


    return { killReports, setKillReports };
}