import { useEffect, useState } from 'react';

import { PlayerDetails } from '../types';

export function usePlayerById(playerAddress: string) {
    const [player, setPlayer] = useState<PlayerDetails | null>(null);

    useEffect(() => {
        fetch('https://blockchain-gateway-stillness.live.tech.evefrontier.com/smartcharacters/' + playerAddress)
            .then(response => response.json())
            .then(data => setPlayer(data))
            .catch(error => console.error('Error fetching players:', error));
    }, [playerAddress]);


    return { player, setPlayer };
}