import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import ThirdWeb
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainIds = [4];

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};

// Finally, wrap App with ThirdwebWeb3Provider.
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
    <div className="hero-image">
      <div className="landing">
        <a id="brand" className="brand" href="https://github.com/canriquez">
            <img src="https://img.shields.io/badge/by-Carlos%20Anriquez-red" alt="carlos anriquez" />
        </a>
        <App />
      </div>
    </div>
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById('root')
);