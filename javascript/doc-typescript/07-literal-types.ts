//@ts-nocheck
//=============
//LITERAL TYPES
//=============

/*
O tipo é o próprio valor. Funciona com strings, números e booleanos.
*/

let direcao: "norte" | "sul" | "leste" | "oeste";

direcao = "norte";
// direcao = "cima";   // Erro: valor fora das opções

type Dado = 1 | 2 | 3 | 4 | 5 | 6;
const resultado: Dado = 4;


//==================================
//CONJUNTOS DE OPÇÕES COM TYPE ALIAS
//==================================

/*
Nomear a união evita repetição e centraliza as opções válidas.
*/

type Status = "pendente" | "aprovado" | "rejeitado";

function atualizar(id: number, status: Status) {
    console.log(`Pedido ${id}: ${status}`);
}

atualizar(1, "aprovado");
// atualizar(2, "cancelado");   // Erro


//========
//as const
//========

/*
A asserção "as const" faz o TS tratar o valor como literal e somente leitura.
Útil para transformar um array de valores em uma união de literais.
*/

const CORES = ["vermelho", "verde", "azul"] as const;

type Cor = (typeof CORES)[number];   // "vermelho" | "verde" | "azul"

const favorita: Cor = "verde";