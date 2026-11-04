//@ts-nocheck

//=======================
//SHORT-CIRCUIT OPERATION
//=======================

/*
Short-circuit (curto-circuito) é quando um operador lógico
interrompe a avaliação ao encontrar um resultado suficiente.

Os operadores && e || podem evitar a execução do lado direito.
*/


//=============================
//SHORT-CIRCUIT COM AND (&&)
//=============================

/*
O && retorna o primeiro valor falsy encontrado.
Se o primeiro valor for truthy, retorna o segundo valor.
*/

const name = "Vinícius";

const result = name && "Olá, " + name;

console.log(result); // "Olá, Vinícius"


//============================
//SHORT-CIRCUIT COM OR (||)
//============================

/*
O || retorna o primeiro valor truthy encontrado.
Se o primeiro valor for falsy, retorna o segundo valor.
*/

const username = "";

const result = username || "Usuário anônimo";

console.log(result); // "Usuário anônimo"


//================================
//SHORT-CIRCUIT COM NULLISH (??)
//================================

/*
O ?? retorna o segundo valor somente se o primeiro for
null ou undefined. Diferentemente do ||, aceita 0, "" e false.
*/

const age = 0;

const result = age ?? 18;

console.log(result); // 0


//=================================
//EXECUTANDO FUNÇÕES CONDICIONALMENTE
//=================================

/*
Podemos usar && para executar o lado direito somente
quando o primeiro valor for truthy.
*/

const isLogged = true;

isLogged && console.log("Usuário autenticado");

// Executa o console.log porque isLogged é true.
