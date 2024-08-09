const nameQ = prompt('Qual o seu nome?');
const age = prompt('Quantos anos você tem?');
const language = prompt('Qual linguagem de programação você está estudando');

const msg = `Olá ${nameQ}, você tem ${age} anos e está aprendendo ${language}!`;
alert(msg);

const estudar = prompt(`Você gosta de estudar ${language}? Responda com 1 para SIM e 2 para NÃO`);

if (estudar === '1') {
   alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
} 
if (estudar === '2') {
    alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
}