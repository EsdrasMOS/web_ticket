import React, { createContext, useContext, useState } from 'react';
import { senhasEmitidas, filaAtual, ultimasChamadas, emitirSenha, chamarProxima } from './utils/mockData';

const AtendimentoContext = createContext();

export function AtendimentoProvider({ children }) {
  const [senhas, setSenhas] = useState(senhasEmitidas);
  const [fila, setFila] = useState(filaAtual);
  const [chamadas, setChamadas] = useState(ultimasChamadas);

  const handleEmitirSenha = (tipo) => {
    const novaSenha = emitirSenha(tipo);
    setSenhas([...senhas, novaSenha]); 
    setFila([...fila, novaSenha.numero]);
  };

  const handleChamarProxima = () => {
    const chamada = chamarProxima();
    if (chamada) {
      setChamadas([...chamadas]);
    }
  };

  return (
    <AtendimentoContext.Provider value={{ senhas, fila, chamadas, handleEmitirSenha, handleChamarProxima }}>
      {children}
    </AtendimentoContext.Provider>
  );
}

export function useAtendimento() {
  return useContext(AtendimentoContext);
}