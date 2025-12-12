import React, { createContext, useContext, useState, useEffect } from 'react';
import { senhasEmitidas, filaAtual, ultimasChamadas, emitirSenha, chamarProxima } from './utils/mockData';

const AtendimentoContext = createContext();

export function AtendimentoProvider({ children }) {
  const [senhas, setSenhas] = useState(senhasEmitidas);
  const [fila, setFila] = useState(filaAtual);
  const [chamadas, setChamadas] = useState(ultimasChamadas);
  const [expedienteAtivo, setExpedienteAtivo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setExpedienteAtivo(false), 5 * 60 * 1000); 
    return () => clearTimeout(timer);
  }, []);

  const handleEmitirSenha = (tipo) => {
    console.log('Expediente ativo:', expedienteAtivo);
    if (!expedienteAtivo) return;
    const novaSenha = emitirSenha(tipo);
    console.log('Senha emitida:', novaSenha);
    setSenhas([...senhas, novaSenha]);
    setFila([...fila, novaSenha.numero]);
    return novaSenha;
  };

  const handleChamarProxima = () => {
    const chamada = chamarProxima();
    if (chamada) {
      setChamadas([...chamadas]);
    }
  };

  return (
    <AtendimentoContext.Provider value={{ senhas, fila, chamadas, expedienteAtivo, handleEmitirSenha, handleChamarProxima }}>
      {children}
    </AtendimentoContext.Provider>
  );
}

export function useAtendimento() {
  return useContext(AtendimentoContext);
}