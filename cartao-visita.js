const prompt = require('prompt-sync')();
const nome = prompt('Qual seu nome? ');
const profissao = prompt('Qual sua profissão? ');
const idade = prompt('Qual sua idade? ');

console.log(`- Nome: ${nome} \n- Profissão: ${profissao} \n- Idade: ${idade} anos.`);