import React from 'react';
import Totem from './components/Totem';
import Painel from './components/Painel';
import ControleAA from './components/ControleAA'
import Relatorios from './components/Relatorios';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Sistema de Controle de Atendimento</h1>
      <Totem />
      <ControleAA />
      <Painel />
      <Relatorios />
    </div>
  );
}

export default App;