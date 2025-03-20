import './App.css';

import PoxCycles from './components/endPoints/GetLastPoxCycles';
import GetLastStacksBlock from './components/endPoints/GetLastStacksBlock';
import GetLastBurnBlock from './components/endPoints/GetLastBurnBlock';
import GetOneBitcoinBlock from './components/endPoints/GetOneBurnBlock';
import GetLastTenureTx from './components/endPoints/GetLastTenureTx';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PoxCycles />
        <GetOneBitcoinBlock fullBitcoinHash="0x000000000000000000010e28d4693b477da839300a598eb3551c02fd0fd2e9f4" />
        <GetLastBurnBlock />
        <GetLastStacksBlock />
        <GetLastTenureTx />
      </header>
    </div>
  );
}
