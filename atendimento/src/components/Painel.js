import React from 'react';
import { useAtendimento } from '../AtendimentoContext';

function Painel() {
  const { chamadas } = useAtendimento();

  return (
    <div>
      <h2>Painel de Chamadas</h2>
      <ul>
        {chamadas.map((chamada, idx) => (
          <li key={idx}>
            Senha: {chamada.numero} - Guichê: {chamada.guiche} - Atendido em: {chamada.dataAtendimento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Painel;