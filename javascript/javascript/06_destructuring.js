//@ts-nocheck

//====================
//DESTRUCTURING EM JS
//====================

/*
Destructuring permite extrair valores de arrays e propriedades de objetos,
atribuindo-os diretamente a variáveis.
*/


//=========================
//DESTRUCTURING DE ARRAYS
//=========================

/*
As variáveis recebem os valores conforme a posição dos elementos.
*/

const colors = ["red", "blue", "green"];

const [first, second] = colors;

console.log(first);  // "red"
console.log(second); // "blue"


//==================================
//IGNORANDO ELEMENTOS DE UM ARRAY
//==================================

/*
A vírgula permite pular posições que não queremos extrair.
*/

const [ , , third] = colors;

console.log(third); // "green"


//===============================
//VALORES PADRÃO EM ARRAYS
//===============================

/*
O valor padrão é utilizado quando a posição contém undefined.
*/

const [a, b, c = "yellow"] = ["red", "blue"];

console.log(c); // "yellow"


//===================================
//DESTRUCTURING COM REST OPERATOR
//===================================

/*
O ...rest reúne os elementos ou propriedades restantes em uma nova variável.
*/

const [firstColor, ...otherColors] = colors;

console.log(firstColor);   // "red"
console.log(otherColors);  // ["blue", "green"]

const { nome: name, ...otherData } = user;

console.log(name);       // "Vinicius"
console.log(otherData);  // { idade: 25 }


//==========================
//DESTRUCTURING DE OBJETOS
//==========================

/*
As variáveis recebem os valores das propriedades com o mesmo nome.
*/

const user = {
    nome: "Vinicius",
    idade: 25,
};

const { nome, idade } = user;

console.log(nome);  // "Vinicius"
console.log(idade); // 25


//================================
//RENOMEANDO VARIÁVEIS DE OBJETOS
//================================

/*
Utilizamos : para atribuir uma propriedade a uma variável com outro nome.
*/

const { nome: userName } = user;

console.log(userName); // "Vinicius"


//===================================
//DEFININDO VALORES PADRÃO EM OBJETOS
//===================================

/*
O valor padrão é utilizado quando a propriedade é undefined.
*/

const { profissao = "Estudante" } = user;

console.log(profissao); // "Estudante"


//============================
//DESTRUCTURING EM PARÂMETROS
//============================

/*
Podemos extrair propriedades diretamente nos parâmetros de uma função,
evitando acessar cada propriedade manualmente.
*/

function showUser({ nome, idade }) {
    console.log(`${nome} tem ${idade} anos.`);
}

showUser(user); // "Vinicius tem 25 anos."