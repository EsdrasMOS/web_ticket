import React from 'react';
import { ultimasChamadas } from '../utils/mockData';

function Painel() {
  return (
    <div>
      <h2>Painel de Chamadas</h2>
      <ul>
        {ultimasChamadas.map((chamada, idx) => (
          <li key={idx}>
            Senha: {chamada.numero} - Guichê: {chamada.guiche} - Atendido em: {chamada.dataAtendimento}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Painel;