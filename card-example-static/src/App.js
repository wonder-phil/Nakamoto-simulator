import React from 'react';
import './App.css';
import BlockCard from './components/BlockCard';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlockCard  height="99934" hash="0000aba9833cd3ab" />
      </header>
    </div>
  );
}

