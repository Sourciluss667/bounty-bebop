import { Box, Flex, Text, Tooltip } from '@radix-ui/themes';

import React from 'react';
import { SmartAssembly } from '../../types';

export function Asset({ asset }: { asset: SmartAssembly }) {
  return (
    <Box style={{ border: '1px solid', borderColor: asset.isOnline ? 'var(--green-5)' : 'var(--red-5)', borderRadius: 'var(--radius-2)', padding: '1rem' }}>
      <Flex direction="row" gap="4">
        <Flex direction="column">
          <Text>{asset.name}</Text>
          <Text>{asset.assemblyType}</Text>
        </Flex>
        <Flex direction="column">
          <Tooltip content={`${asset.solarSystem.location.x}, ${asset.solarSystem.location.y}, ${asset.solarSystem.location.z}`}>
            <Text>{asset.solarSystem.solarSystemName}</Text>
          </Tooltip>
        </Flex>
      </Flex>
    </Box>
  );
}
