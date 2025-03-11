import logo from './logo.svg';
import './App.css';

import PoxCycles from './components/coreUtilities/GetLastPoxCycles';
import GetLastStacksBlock from './components/coreUtilities/GetLastStacksBlock';
import GetLastBurnBlock from './components/coreUtilities/GetLastBurnBlock';
import GetOneBitcoinBlock from './components/coreUtilities/GetOneBurnBlock';
import GetLastTenureTx from './components/coreUtilities/GetLastTenureTx';

function App() {
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

export default App;

/*
<GetLastBitcoinBlock fullBitcoinHash="0x52608bb89eb6d56e6a9ae79aab1c6a6c65c5ce41b9fea714f4609e0b04d5a4c0" />
 <PoxCycles />
<MyComponent fullBitcoinHash="0x52608bb89eb6d56e6a9ae79aab1c6a6c65c5ce41b9fea714f4609e0b04d5a4c0" />
*/