import React from 'react';
import { useAtendimento } from '../AtendimentoContext';

function Relatorios() {
  const { senhas } = useAtendimento();
  const totalEmitidas = senhas.length;
  const totalAtendidas = senhas.filter(s => s.status === 'atendida').length;
  const spEmitidas = senhas.filter(s => s.tipo === 'SP').length;
  const sgEmitidas = senhas.filter(s => s.tipo === 'SG').length;
  const seEmitidas = senhas.filter(s => s.tipo === 'SE').length;

  return (
    <div>
      <h2>Relatórios (AS)</h2>
      <p>Total Emitidas: {totalEmitidas}</p>
      <p>Total Atendidas: {totalAtendidas}</p>
      <p>SP Emitidas: {spEmitidas}</p>
      <p>SG Emitidas: {sgEmitidas}</p>
      <p>SE Emitidas: {seEmitidas}</p>
    </div>
  );
}

export default Relatorios;