import { Activity } from './Activity';
import { Flex } from '@radix-ui/themes';
import React from 'react';
import { useKillReports } from '../../hooks/useKillReports';

export default function Activities({ playerAddress }: { playerAddress: string }) {
    const { killReports } = useKillReports();

    const playerReports = killReports
        .filter(killReport => killReport.victim.address === playerAddress || killReport.killer.address === playerAddress)
        .sort((a, b) => b.timestamp - a.timestamp);

    
    return (
        <Flex direction="column" gap="4" style={{ paddingTop: '1rem' }}>
          {playerReports.map((killReport) => (
            <Activity killReport={killReport} playerAddress={playerAddress} />
          ))}
        </Flex>
    );
}
