//@ts-nocheck

//==========
//TYPE ALIAS
//==========

/*
Um type alias (apelido de tipo) dá um nome a um tipo, permitindo reutilizá-lo.
É declarado com a palavra-chave "type". Por convenção, nomes de tipos começam com letra maiúscula.
*/


//=================================
//CRIANDO UM TYPE ALIAS PARA OBJETO
//=================================

/*
O formato do objeto é definido uma única vez e usado em qualquer lugar.
*/

type Usuario = {
    nome: string;
    idade: number;
    email?: string;
};

const u1: Usuario = { nome: "Ana", idade: 30 };
const u2: Usuario = { nome: "Bruno", idade: 25, email: "bruno@exemplo.com" };


//=============================
//TYPE ALIAS PARA TIPOS SIMPLES
//=============================

/*
O alias não se limita a objetos: pode nomear primitivos, uniões, arrays e tuplas.
*/

type ID = string | number;
type Lista = number[];
type Par = [string, number];

let codigo: ID = 123;
codigo = "abc-123";


//=======================
//TYPE ALIAS PARA FUNÇÕES
//=======================

/*
Descreve a assinatura de uma função: tipos dos parâmetros e do retorno.
*/

type Operacao = (a: number, b: number) => number;

const somar: Operacao = (a, b) => a + b;
const multiplicar: Operacao = (a, b) => a * b;


//=====================
//COMPOSIÇÃO DE ALIASES
//=====================

/*
Aliases podem ser usados dentro de outros aliases.
*/

type Endereco = { rua: string; cidade: string };
type Cliente = { nome: string; endereco: Endereco };

const cliente: Cliente = {
    nome: "Marina",
    endereco: { rua: "Rua B", cidade: "Campinas" },
};


//=========
//LIMITAÇÃO
//=========

/*
Um type alias não pode ser declarado duas vezes com o mesmo nome (não há "fusão" de declarações).
Para esse comportamento, utiliza-se interface (arquivo 08).
*/

type Ponto = { x: number };
// type Ponto = { y: number };   // Erro: identificador 'Ponto' duplicado
