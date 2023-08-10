//Atividade 1

let input = require('readline-sync')
//Dados do Usuário
let idade
let exp
let nEdu
let certificado
let status

//Dados de comparação
const idadeMinima = 18
const expMinima = 6
const nEduMinima = "superior"
const obCertificado = true

//Entrada de dados

idade = input.questionInt("Qual a sua idade?\n")
exp = input.questionInt("Quantos anos de experiencia?\n");
nEdu = input.question("Qual seu nível de educação\n").toLocaleLowerCase();
certificado = input.questionInt("Possui certificado? 1 - Sim; 2 - Não\n");

certificado = (certificado == 1) ? true: false

//Processamento de Dados
status = (idade >= idadeMinima) && (exp >= expMinima) && (nEdu === nEduMinima || certificado == obCertificado)

status = (status == true) ? "SIM":"Não" 

//Saída de dados*/
console.log('Está elegivel para a vaga?' + status);
