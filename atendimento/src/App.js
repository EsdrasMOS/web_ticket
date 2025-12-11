import React from 'react';
import Totem from './components/Totem';
import Painel from './components/Painel';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sistema de Controle de Atendimento</h1>
      <Totem />
      <Painel />
    </div>
  );
}

export default App;