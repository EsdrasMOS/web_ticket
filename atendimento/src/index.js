import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AtendimentoProvider } from './AtendimentoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AtendimentoProvider>
      <App />
    </AtendimentoProvider>
  </React.StrictMode>
);