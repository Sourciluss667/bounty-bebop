import React from 'react';
import { Flex, Heading, Text } from '@radix-ui/themes';

export default function Activities({ playerId }: { playerId: string }) {
    // Fetch kill reports of this player
    return (
        <Flex direction="column" gap="4" style={{ padding: '1rem' }}>
            <Heading>Activities</Heading>
            <Flex direction="column" gap="4">
                <Text>WIP - Coming soon</Text>
            </Flex>
        </Flex>
    );
}
