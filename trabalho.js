/* QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas */
/* QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção */
/* QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário */
/* QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada */
/* QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona */

function geradorDeTagsDeIdentificacao(tag) {
return tag.toUpperCase()
}
console.log(geradorDeTagsDeIdentificacao('Pantera'))

function verificarSePodeSerAdotado(idade, porte) {
    if (idade >= 1 && porte === 'M') {
    return true;
  }
  return false;
}

function calcularConsumoDeRacao(nome, idade, peso) {
  
  return Math.round(peso * 300);
}

function decidirTipoDeAtividadePorPorte(porte) {
  if (porte === 'pequeno') {
    return 'brincar dentro de casa';
  }
  return 'atividade não definida';
}

async function buscarDadoAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pipoca');
    }, 100);
  });
}

export {
        geradorDeTagsDeIdentificacao,
        verificarSePodeSerAdotado,
        calcularConsumoDeRacao,
        decidirTipoDeAtividadePorPorte,
        buscarDadoAsync
      }