export const senhasEmitidas = [
    { id: 1, numero: '240101-SP001', tipo: 'SP', dataEmissao: '2024-01-01 08:00:00', status: 'espera' },
    { id: 2, numero: '240101-SE001', tipo: 'SE', dataEmissao: '2024-01-01 08:05:00', status: 'espera' },
    { id: 3, numero: '240101-SG001', tipo: 'SG', dataEmissao: '2024-01-01 08:10:00', status: 'espera' },
  ];
  
  export const filaAtual = ['240101-SP001', '240101-SE001', '240101-SG001'];
  
  export const ultimasChamadas = [
    { numero: '240101-SP001', guiche: 1, dataAtendimento: '2024-01-01 08:15:00' },
  ];
  
  export function calcularTM(tipo) {
    const base = { SP: 15, SG: 5, SE: 1 }[tipo] || 5;
    const variacao = tipo === 'SP' ? Math.floor(Math.random() * 11) - 5 : Math.floor(Math.random() * 7) - 3; 
    return Math.max(1, base + variacao); 
  }
  
  export function emitirSenha(tipo) {
    const hoje = new Date();
    const yy = hoje.getFullYear().toString().slice(-2);
    const mm = (hoje.getMonth() + 1).toString().padStart(2, '0');
    const dd = hoje.getDate().toString().padStart(2, '0');
    const seq = senhasEmitidas.filter(s => s.tipo === tipo).length + 1;
    const numero = `${yy}${mm}${dd}-${tipo}${seq.toString().padStart(3, '0')}`;
    const novaSenha = { id: senhasEmitidas.length + 1, numero, tipo, dataEmissao: hoje.toISOString(), status: 'espera' };
    senhasEmitidas.push(novaSenha);
    filaAtual.push(numero);
    return novaSenha;
  }
  
  export function chamarProxima() {
    if (filaAtual.length === 0) return null;
    const proxima = filaAtual.shift();
    const senha = senhasEmitidas.find(s => s.numero === proxima);
    if (senha) {
      senha.status = 'atendendo';
      senha.dataAtendimento = new Date().toISOString();
      senha.tm = calcularTM(senha.tipo);
      ultimasChamadas.unshift({ numero: senha.numero, guiche: 1, dataAtendimento: senha.dataAtendimento }); 
      if (ultimasChamadas.length > 5) ultimasChamadas.pop(); 
    }
    return senha;
  }