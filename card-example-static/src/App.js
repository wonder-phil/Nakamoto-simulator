import React from 'react';
import './App.css';
import BlockCard from './components/BlockCard';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlockCard  height="99934" hash="0000aba9833cd3ab" block_time_iso="2025-04-01" burn_block_hash="0x00...00a5b...88f2" burn_block_height="8893840"/>
      </header>
    </div>
  );
}

