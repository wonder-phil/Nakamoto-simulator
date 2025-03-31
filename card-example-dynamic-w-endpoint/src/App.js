import './App.css';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import CardHolderEndpointBurnBlock from './components/CardHolderEndpointBurnBlock';
import CardHolderEndpointPoxBlock from './components/CardHolderEndpointPoxBlock'
import CardHolderEndpoinTenureBlockTx from './components/CardHolderEndpoinTenureBlockTx';
import CardHolderEndpointStacksBlock from './components/CardHolderEndpointStacksBlock';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <ErrorBoundary>
          <CardHolderEndpointPoxBlock />
          <CardHolderEndpointBurnBlock />  
          <CardHolderEndpoinTenureBlockTx />
          <CardHolderEndpointStacksBlock />
        </ErrorBoundary>
      </header>
    </div>
  );
}
