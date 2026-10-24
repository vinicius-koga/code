//@ts-nocheck

//===========================
//UNION TYPES E LITERAL TYPES
//===========================

/*
Union type (tipo união): o valor pode ser de um tipo OU de outro, separados por "|".
Literal type (tipo literal): o valor precisa ser exatamente um dos valores indicados.
A combinação dos dois permite criar conjuntos fechados de opções.
*/


//===========
//UNION TYPES
//===========

/*
A variável aceita qualquer um dos tipos listados.
*/

let id: string | number;

id = 10;
id = "abc";
// id = true;   // Erro: boolean não faz parte da união


//==========================
//UNIÃO COM null E undefined
//==========================

/*
Padrão frequente para representar valores que podem estar ausentes.
*/

let apelido: string | null = null;
let telefone: string | undefined;

apelido = "Vini";


//========================
//USANDO UM VALOR DE UNIÃO
//========================

/*
Em uma união, só é possível usar o que é comum a todos os tipos.
Para usar recursos específicos, é preciso estreitar o tipo (arquivo 12).
*/

function exibir(valor: string | number) {
    // valor.toUpperCase();   // Erro: não existe em number

    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    } else {
        console.log(valor.toFixed(2));
    }
}


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
