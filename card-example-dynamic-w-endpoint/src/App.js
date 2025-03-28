import './App.css';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import CardHolderEndpointBurnBlock from './components/CardHolderEndpointBurnBlock';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">  
        <ErrorBoundary>
          <CardHolderEndpointBurnBlock />  
        </ErrorBoundary>
      </header>
    </div>
  );
}
