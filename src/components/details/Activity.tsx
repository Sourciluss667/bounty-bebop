import { Box, Flex, Text, Tooltip } from '@radix-ui/themes';
import React, { useMemo } from 'react';

import { KillReport } from '../../types';
import { filetimeToDate } from '../../utils';

export function Activity({ killReport, playerAddress }: {killReport: KillReport, playerAddress: string}) {
  const isVictim = killReport.victim.address === playerAddress;

  const { dateToDisplay, fullDate} = useMemo(() => {
    const date = filetimeToDate(killReport.timestamp);

    if (date.toDateString() === new Date().toDateString()) {
      return {
        dateToDisplay: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        fullDate: date.toLocaleString([], { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
      };
    }

    return {
      dateToDisplay: date.toLocaleString([], { day: '2-digit', month: '2-digit', year: '2-digit' }),
      fullDate: date.toLocaleString([], { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
    };
  }, [killReport.timestamp]);

  return (
    <Box style={{ border: '1px solid', borderColor: isVictim ? 'var(--red-5)' : 'var(--green-5)', borderRadius: 'var(--radius-2)', padding: '1rem' }}>
      <Flex direction="row" gap="4">
        <Tooltip content={fullDate}>
          <Text>{dateToDisplay}</Text>
        </Tooltip>
        <Text>{killReport.killer.name}</Text>
        <Text>{killReport.victim.name}</Text>
      </Flex>
    </Box>
  );
}
