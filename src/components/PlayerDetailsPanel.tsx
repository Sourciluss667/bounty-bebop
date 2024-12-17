import React from 'react';
import { Flex, Heading, Spinner, Text, TextField, Tooltip, Button, Tabs } from '@radix-ui/themes';

import { usePlayerById } from '../hooks/usePlayerById';
import { EveTokenIcon } from '../assets/svg/EveTokenIcon';
import { formatTooLongString, formatWei } from '../utils';
import { EthereumIcon } from '../assets/svg/EthereumIcon';
import { CopyButton } from './CopyButton';
import Activities from './details/Activities';

import './PlayerDetailsPanel.css';

export function PlayerDetailsPanel({ playerAddress }: { playerAddress: string }) {
    const { player } = usePlayerById(playerAddress);

    if (!player) return <Flex justify="center" align="center" style={{ flex: 1, width: '100%' }}><Spinner /></Flex>;

    return (
        <Flex direction="column" gap="4" style={{ flex: 1, borderLeft: '1px solid #e0e0e0', paddingLeft: '1rem' }}>
            <Flex direction="row" gap="4" justify="between" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem' }}>
                <Flex direction="column" gap="4" style={{ width: '100%' }}>
                    <Flex direction="row" gap="4" justify="between">
                        <Heading style={{ color: 'var(--accent-10)' }}>{player.name}</Heading>
                        <img src={player.image} alt={player.name} width={64} height={64} />
                    </Flex>

                    <Tooltip content={player.id}>
                        <TextField.Root placeholder='ID' value={formatTooLongString(player.id, 42)} className="textfield-root">
                            <TextField.Slot>
                                <Text style={{ color: 'var(--accent-11)' }}>ID&nbsp;</Text>
                            </TextField.Slot>
                            <TextField.Slot>
                                <CopyButton text={player.id} />
                            </TextField.Slot>
                        </TextField.Root>
                    </Tooltip>

                    <Tooltip content={player.address}>
                        <TextField.Root placeholder='Address' value={formatTooLongString(player.address, 36)} className="textfield-root">
                            <TextField.Slot>
                                <Text style={{ color: 'var(--accent-11)' }}>Address&nbsp;</Text>
                            </TextField.Slot>
                            <TextField.Slot>
                                <CopyButton text={player.address} />
                            </TextField.Slot>
                        </TextField.Root>
                    </Tooltip>

                    <TextField.Root placeholder='Corp ID' value={player.corpId} className="textfield-root">
                        <TextField.Slot>
                            <Text style={{ color: 'var(--accent-11)' }}>Corp ID&nbsp;</Text>
                        </TextField.Slot>
                        <TextField.Slot>
                            <CopyButton text={player.corpId} />
                        </TextField.Slot>
                    </TextField.Root>

                    <TextField.Root placeholder='EVE Token Balance' value={formatWei(player.eveBalanceWei)} className="textfield-root">
                        <TextField.Slot>
                            <EveTokenIcon color="var(--accent-11)" />
                        </TextField.Slot>
                        <TextField.Slot>
                            <CopyButton text={formatWei(player.eveBalanceWei).toString()} />
                        </TextField.Slot>
                    </TextField.Root>

                    <Tooltip content={`${formatWei(player.gasBalanceWei)} ETH`}>
                        <TextField.Root placeholder='GAS Balance' value={formatWei(player.gasBalanceWei).toFixed(4)} className="textfield-root">
                            <TextField.Slot>
                                <EthereumIcon color="var(--accent-11)" />
                            </TextField.Slot>
                            <TextField.Slot>
                                <CopyButton text={formatWei(player.gasBalanceWei).toString()} />
                            </TextField.Slot>
                        </TextField.Root>
                    </Tooltip>
                </Flex>
            </Flex>
            <Tabs.Root defaultValue="activities">
                <Tabs.List>
                    <Tabs.Trigger value="activities">Activities</Tabs.Trigger>
                    <Tabs.Trigger value="assets">Assets</Tabs.Trigger>
                    <Tabs.Trigger value="transactions">Bounties</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="activities">
                    <Activities playerId={player.id} />
                </Tabs.Content>
                <Tabs.Content value="assets">
                    <Flex direction="column" gap="4" style={{ padding: '1rem' }}>
                        <Heading>Assets</Heading>
                        <Flex direction="column" gap="4">
                            <Text>WIP - Coming soon</Text>
                        </Flex>
                    </Flex>
                </Tabs.Content>
                <Tabs.Content value="transactions">
                    <Flex direction="column" gap="4" style={{ padding: '1rem' }}>
                        <Heading>Bounties</Heading>
                        <Flex direction="column" gap="4">
                            <Text>WIP - Coming soon</Text>
                        </Flex>
                    </Flex>
                </Tabs.Content>
            </Tabs.Root>
        </Flex>
    );
}