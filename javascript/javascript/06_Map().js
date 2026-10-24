//@ts-nocheck

//==========
//OBJETO MAP
//==========

/*
Map é uma estrutura de dados que armazena pares de chave e valor.
Cada chave é única e permite acessar o valor associado a ela.
*/


//==============
//CRIANDO UM MAP
//==============

/*
new Map() cria uma nova instância de Map, inicialmente vazia.
*/

const dados = new Map();

// [["chave", "valor"], ["chave", "valor"]];


//=================
//ARMAZENANDO DADOS
//=================

/*
O método set(chave, valor) adiciona uma entrada ao Map.
Se a chave já existir, seu valor será atualizado.
*/

dados.set("nome", "Vinícius");
dados.set("idade", 26);

// [["nome", "Vinícius"], ["idade", 26]];

//==================
//ACESSANDO UM VALOR
//==================

/*
O método get(chave) retorna o valor associado à chave.
Se a chave não existir, retorna undefined.
*/

console.log(dados.get("nome")); // "Vinícius"


//=====================
//VERIFICANDO UMA CHAVE
//=====================

/*
O método has(chave) verifica se a chave existe no Map.
Retorna true ou false.
*/

console.log(dados.has("idade")); // true
console.log(dados.has("email")); // false


//===============
//REMOVENDO DADOS
//===============

/*
O método delete(chave) remove uma entrada do Map.
A propriedade size retorna a quantidade de entradas.
*/

dados.delete("idade");

console.log(dados.size); // 1


//==============
//TIPANDO UM MAP
//==============

/*
No TypeScript, podemos definir o tipo das chaves e dos valores.
Map<TipoDaChave, TipoDoValor>
*/

// const indices = new Map<number, number>();
