//@ts-nocheck

//==============
//KEYOF E TYPEOF
//==============

/*
typeof -> obtém o tipo de uma variável ou objeto.
keyof -> obtém uma união dos nomes das propriedades de um tipo.
*/


//=================
//UTILIZANDO TYPEOF
//=================

/*
typeof permite criar um tipo baseado no valor de uma variável.
*/

const usuario = {
    nome: "Vinícius",
    idade: 26,
};

type Usuario = typeof usuario;
// Resultado: { nome: string; idade: number }


//================
//UTILIZANDO KEYOF
//================

/*
keyof cria um tipo com os nomes das propriedades de OUTRO TIPO.
*/

type ChavesUsuario = keyof Usuario;
// Resultado: "nome" | "idade"


//=========================
//COMBINANDO KEYOF E TYPEOF
//=========================

/*
typeof obtém o tipo do objeto.
keyof obtém as chaves desse tipo.
*/

const configuracao = {
    tema: "escuro",
    idioma: "pt-BR",
};

type ChavesConfiguracao = keyof typeof configuracao;
// Resultado: "tema" | "idioma"


//========================
//UTILIZANDO TYPEOF EM ARRAYS
//========================

/*
typeof obtém o tipo do array.
as const preserva os valores literais dos elementos.
*/

const CORES = [
    "black",
    "brown",
    "red",
    "orange",
] as const;

type Cores = typeof CORES;
// Resultado: readonly ["black", "brown", "red", "orange"]


//========================
//OBTENDO TIPOS DOS ELEMENTOS
//========================

/*
typeof CORES[number] obtém o tipo de qualquer elemento do array.
number representa os índices numéricos do array.
*/

type Cor = typeof CORES[number];
// Resultado: "black" | "brown" | "red" | "orange"

const cor: Cor = "red"; // Válido
// const cor: Cor = "blue"; // Erro: "blue" não está no tipo


//=========================
//UTILIZANDO KEYOF EM ARRAYS
//=========================

/*
keyof obtém as chaves do tipo do array,
incluindo índices, métodos e propriedades.
*/

type ChavesCores = keyof typeof CORES;
// Exemplo de chaves: 0 | 1 | 2 | 3 | "length" | ...


//=================================
//COMBINANDO KEYOF E TYPEOF EM ARRAYS
//=================================

/*
typeof obtém o tipo do array.
keyof obtém suas chaves.
typeof ARRAY[number] obtém os tipos dos elementos.
*/

const CORES_DISPONIVEIS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
] as const;

type CorDisponivel = typeof CORES_DISPONIVEIS[number];
// Resultado: união de todas as cores do array