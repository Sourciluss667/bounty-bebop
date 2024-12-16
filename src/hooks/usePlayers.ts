
import { useEffect, useState } from 'react';
import { Player } from '../types';

export function usePlayers() {
    const [players, setPlayers] = useState<Player[]>([]);
    // Get players at json format at this path: https://blockchain-gateway-stillness.live.tech.evefrontier.com/smartcharacters
    // Then parse the json and set the players state

    useEffect(() => {
        fetch('https://blockchain-gateway-stillness.live.tech.evefrontier.com/smartcharacters')
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error fetching players:', error));
    }, []);


    return { players, setPlayers };
}