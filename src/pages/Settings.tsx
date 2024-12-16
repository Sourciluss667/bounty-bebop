import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';
export default function Settings() {
  return (
    <Flex direction="column" gap="4" style={{ padding: '1rem' }}>
        <Heading>Settings</Heading>
        <Flex direction="column" gap="4">
            <Text>WIP - Coming soon</Text>
        </Flex>
    </Flex>
  );
}