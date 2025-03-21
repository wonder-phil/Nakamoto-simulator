import './App.css';

import DynamicCard from './components/DynamicCard';
import DynamicCardCollapse from './components/DynamicCardAccordion';

const container = 
{
  "canonical": true,
  "height": 733786,
  "hash": "0x456ff10c1f3d870697fe8ea80ce27f01756ba4875515c47d7e6fcdf5ea0896cb",
  "block_time": 1741441821,
  "block_time_iso": "2025-03-08T13:50:21.000Z",
  "tenure_height": 187940,
  "index_block_hash": "0xa9900a4323c92ae587f8e55622b8d46cb99131c19376a4be179a6c50649f5ad5",
  "parent_block_hash": "0xfeb3d1dd27e2555ea372669c9547b7887d3d39e2b0b1c67a0c0e3b2728f926b3",
  "burn_block_time": 1741441223,
  "burn_block_time_iso": "2025-03-08T13:40:23.000Z",
  "burn_block_hash": "0x0000000000000000000079a14b7bcddfcb0c14695976a6cd6c32a0940707e78b",
  "burn_block_height": 886865,
  "miner_txid": "0x0813472654ee73ed1686c1a72a3e7d28c655ded29d709b16484e2433b030cbe8",
  "execution_cost_read_count": 0,
  "execution_cost_read_length": 0,
  "execution_cost_runtime": 0,
  "execution_cost_write_count": 0,
  "execution_cost_write_length": 0,
  "txs": [
    "0xc2f9bb6a6a73e08ce38da86757cd866e54381c2bde43141e70ab52254556e557",
    "0xd0c97bf834e9e87e6e0811a1e7fb4ccc9dbf1fc3ebccee83ab2ebbdf68b41ea6"
  ],
  "parent_microblock_hash": "",
  "parent_microblock_sequence": -1,
  "microblocks_accepted": [],
  "microblocks_streamed": [],
  "microblock_tx_count": {}
};

export default function App() {
  return (
    <div className="App">
      <header className="App-header">  
        { /* <DynamicCard props={container} /> */ }
        <DynamicCardCollapse props={container} /> 
      </header>
    </div>
  );
}

// <DynamicCard props={container} /> 