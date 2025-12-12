import React from 'react';
import { useAtendimento } from '../AtendimentoContext';

function ControleAA() {
  const { fila, handleChamarProxima } = useAtendimento();

  return (
    <div>
      <h2>Controle do Atendente (AA)</h2>
      <p>Fila atual: {fila.join(', ') || 'Vazia'}</p>
      <button onClick={handleChamarProxima} disabled={fila.length === 0}>
        Chamar Próxima Senha
      </button>
    </div>
  );
}

export default ControleAA;