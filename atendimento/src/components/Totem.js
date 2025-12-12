import React, { useState } from 'react';
import { useAtendimento } from '../AtendimentoContext';

function Totem() {
  const [tipo, setTipo] = useState('SG');
  const [senhaEmitida, setSenhaEmitida] = useState(null);
  const { handleEmitirSenha } = useAtendimento();

  const handleEmitir = () => {
    console.log('Emitindo senha do tipo:', tipo);
    const novaSenha = handleEmitirSenha(tipo);
    console.log('Nova senha gerada:', novaSenha);
    if (novaSenha) setSenhaEmitida(novaSenha.numero);
  };

  return (
    <div>
      <h2>Totem - Emitir Senha</h2>
      <label>
        Tipo de Senha:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="SP">Prioritária (SP)</option>
          <option value="SG">Geral (SG)</option>
          <option value="SE">Retirada de Exames (SE)</option>
        </select>
      </label>
      <button onClick={handleEmitir}>Emitir Senha</button>
      {senhaEmitida && <p>Sua senha: {senhaEmitida}</p>}
    </div>
  );
}

export default Totem;