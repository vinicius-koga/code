//@ts-nocheck

//===============
//OBJETOS TIPADOS
//===============

/*
Objetos agrupam propriedades nomeadas. O TS permite descrever o formato esperado
(nome e tipo de cada propriedade) diretamente na anotação.
*/


//==================
//ANOTAÇÃO DE OBJETO
//==================

/*
O formato é descrito entre chaves, com o par nome: tipo para cada propriedade.
*/

let usuario: { nome: string; idade: number } = {
    nome: "Ana",
    idade: 30,
};

usuario.idade = 31;
// usuario.idade = "31";   // Erro


//=========================
//PROPRIEDADES OBRIGATÓRIAS
//=========================

/*
Todas as propriedades declaradas são obrigatórias, e propriedades não declaradas não são permitidas
(verificação de propriedades em excesso em objetos literais).
*/

// let u1: { nome: string; idade: number } = { nome: "Ana" };                  // Erro: falta 'idade'
// let u2: { nome: string } = { nome: "Ana", cidade: "SP" };                   // Erro: 'cidade' não existe no tipo


//======================
//PROPRIEDADES OPCIONAIS
//======================

/*
O símbolo "?" torna a propriedade opcional. Seu tipo passa a incluir undefined.
*/

let produto: { nome: string; descricao?: string } = { nome: "Caneta" };

produto.descricao = "Azul";


//============================
//PROPRIEDADES SOMENTE LEITURA
//============================

/*
O modificador readonly impede a alteração da propriedade após a criação do objeto.
*/

let config: { readonly versao: string; debug: boolean } = {
    versao: "1.0.0",
    debug: false,
};

config.debug = true;
// config.versao = "2.0.0";   // Erro: propriedade somente leitura


//=================
//OBJETOS ANINHADOS
//=================

/*
Objetos podem conter outros objetos, cada um com seu formato definido.
*/

let funcionario: {
    nome: string;
    endereco: { rua: string; numero: number };
} = {
    nome: "Carlos",
    endereco: { rua: "Rua A", numero: 100 },
};

console.log(funcionario.endereco.rua);


//====================
//ASSINATURA DE ÍNDICE
//====================

/*
Permite descrever objetos com chaves variáveis, em que todos os valores têm o mesmo tipo.
É útil para dicionários e mapas.
*/

let notas: { [disciplina: string]: number } = {
    matematica: 8,
    historia: 9,
};

notas.fisica = 7;
// notas.quimica = "dez";   // Erro


//================
//ARRAY DE OBJETOS
//================

/*
Combina a anotação de objeto com a notação de array.
*/

let alunos: { nome: string; nota: number }[] = [
    { nome: "Ana", nota: 9 },
    { nome: "Bruno", nota: 7 },
];


//==============================
//LIMITAÇÃO DA ANOTAÇÃO EM LINHA
//==============================

/*
Repetir o mesmo formato em vários lugares gera duplicação.
Os arquivos 07 (type) e 08 (interface) resolvem esse problema, dando nome ao formato.
*/
