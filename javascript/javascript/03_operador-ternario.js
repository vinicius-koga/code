
//@ts-nocheck

//================
//OPERADOR TERNÁRIO
//================

/*
O operador ternário é uma forma concisa de executar uma
decisão com base em uma condição.

Sintaxe:
condição ? valorSeVerdadeiro : valorSeFalso
*/


//=========================
//UTILIZANDO O TERNÁRIO
//=========================

/*
Se a condição for true, retorna o primeiro valor.
Se for false, retorna o segundo valor.
*/

const age = 20;

const result = age >= 18 ? "Maior de idade" : "Menor de idade";

console.log(result); // "Maior de idade"


//==============================
//ATRIBUINDO O RESULTADO A UMA VARIÁVEL
//==============================

/*
O resultado do operador ternário pode ser armazenado
em uma variável, pois ele retorna um valor.
*/

const isLogged = false;

const message = isLogged ? "Bem-vindo!" : "Faça login";

console.log(message); // "Faça login"


//======================
//TERNÁRIO ANINHADO
//======================

/*
É possível utilizar um ternário dentro de outro para
avaliar várias condições. Porém, o excesso dificulta a leitura.
*/

const score = 75;

const grade = score >= 90 ? "A" : score >= 70 ? "B" : "C";

console.log(grade); // "B"
