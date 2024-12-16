import React from 'react';
import { Link } from 'react-router-dom';

import { Flex, Button } from "@radix-ui/themes";

export default function MenuBar() {
  return (
    <Flex direction="row" gap="8" align="center" justify="center">
      <Button asChild>
        <Link to="/">Players</Link>
      </Button>
      <Button disabled={true} asChild>
        <Link to="/bounties">Bounties</Link>
      </Button>
      <Button disabled={true} asChild>
        <Link to="/settings">Settings</Link>
      </Button>
    </Flex>
  );
}
