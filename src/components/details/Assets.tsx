import { Flex, Text } from '@radix-ui/themes';

import { Asset } from './Asset';
import React from 'react';
import { SmartAssembly } from '../../types';

export default function Assets({ smartAssemblies }: { smartAssemblies: SmartAssembly[] }) {
    return (
        <Flex direction="column" gap="4" style={{ paddingTop: '1rem' }}>
          {smartAssemblies.map((smartAssembly) => (
            <Asset asset={smartAssembly} />
          ))}
          {smartAssemblies.length === 0 && (
            <Text>No assets found</Text>
          )}
        </Flex>
    );
}
