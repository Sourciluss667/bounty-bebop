import { Flex, Heading, IconButton, Spinner, Table, TextField } from '@radix-ui/themes';
import React, { useCallback, useMemo, useState } from 'react';
import { usePlayers } from '../hooks/usePlayers';
import { Player } from '../types';

import { PlayerDetailsPanel } from '../components/PlayerDetailsPanel';
import { Cross1Icon } from '@radix-ui/react-icons';
import { debounce } from '../utils';

export default function Players() {
    const { players } = usePlayers();

    const [player, setPlayer] = useState<Player | null>(null);

    const [searchLoading, setSearchLoading] = useState(false);
    const [search, _setSearch] = useState('');

    const setSearch = useCallback(debounce(_setSearch, 300), []);

    const filteredPlayers = useMemo(() => {
        setSearchLoading(true);
        const filtered = players.filter((player) => player.name.toLowerCase().includes(search.toLowerCase()));
        setSearchLoading(false);
        return filtered;
    }, [players, search]);

    const handlePlayerClick = (_player: Player) => {
        setPlayer(_player);
    }

    const handleClosePlayer = () => {
        setPlayer(null);
    }

    return (
            <Flex direction="column" gap="4" style={{ padding: '1rem' }}>
                <Flex direction="row" gap="4" justify="between">
                    <Flex direction="row" gap="4">
                        <Heading>Players</Heading>
                        <Heading>{players.length}</Heading>
                        <TextField.Root placeholder="Search" onChange={(e) => setSearch(e.target.value)}>
                            <TextField.Slot side='right'>
                                <Flex justify="center" align="center" style={{ width: '1rem', height: '1rem', opacity: searchLoading ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                                    <Spinner />
                                </Flex>
                            </TextField.Slot>
                        </TextField.Root>
                    </Flex>
                    <IconButton variant="ghost" size="3" onClick={handleClosePlayer} disabled={!player} style={{ opacity: player ? 1 : 0.5 }}>
                        <Cross1Icon color="var(--accent-9)" width={24} height={24} />
                    </IconButton>
                </Flex>
                {players.length === 0 ? (
                    <Flex justify="center" align="center" style={{ flex: 1, width: '100%' }}>
                        <Spinner />
                    </Flex>
                ) : (
                    <Flex direction="row" gap="4" style={{ flex: 1, width: '100%' }}>
                        <Table.Root style={{ flex: 3, width: '100%' }}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Kills</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Deaths</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Wanted</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Avatar</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {filteredPlayers.map((_player) => (
                                    <Table.Row key={_player.id} onClick={() => handlePlayerClick(_player)} style={{ cursor: 'pointer', backgroundColor: _player.id === player?.id ? 'var(--accent-3)' : 'transparent' }}>
                                        <Table.Cell>{_player.name}</Table.Cell>
                                        <Table.Cell>{_player.address}</Table.Cell>
                                        <Table.Cell>N/A</Table.Cell>
                                        <Table.Cell>N/A</Table.Cell>
                                        <Table.Cell>N/A</Table.Cell>
                                        <Table.Cell>
                                            <img src={_player.image} alt={_player.name} width={32} height={32} />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                        {player && <PlayerDetailsPanel playerAddress={player.address} />}
                    </Flex>
                )}
            </Flex>
    );
}
