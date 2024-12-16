import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Flex, Heading } from "@radix-ui/themes";

import MenuBar from './components/MenuBar';
import Bounties from './pages/Bounties';
import Players from './pages/Players';
import Settings from './pages/Settings';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" gap="4" className="App">
        <Heading>Bounty Bebop</Heading>
        <MenuBar />
        <Flex direction="column" gap="4" className="content">
          <Routes>
            <Route path="/" element={<Players />} />
            <Route path="/bounties" element={<Bounties />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
