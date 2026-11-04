//@ts-nocheck

//===============
//ARRAYS E TUPLAS
//===============

/*
Array: lista de elementos de um mesmo tipo e de tamanho variável.
Tupla: lista de tamanho fixo em que cada posição possui um tipo específico.
*/


//======
//ARRAYS
//======

/*
Existem duas sintaxes equivalentes: tipo[] e Array<tipo>.
A primeira é a mais usada.
*/

let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ["Ana", "Bruno"];

numeros.push(4);
// numeros.push("5");   // Erro: só aceita number


//==========================
//ARRAYS COM MAIS DE UM TIPO
//==========================

/*
Para misturar tipos, utiliza-se uma união (tema do arquivo 09). Os parênteses são obrigatórios.
*/

let misto: (string | number)[] = ["a", 1, "b", 2];


//======================
//ARRAYS SOMENTE LEITURA
//======================

/*
O modificador readonly impede alterações no array (push, pop, atribuição por índice).
*/

const dias: readonly string[] = ["seg", "ter", "qua"];

// dias.push("qui");    // Erro: 'push' não existe em readonly string[]


//=============================
//MÉTODOS DE ARRAY E INFERÊNCIA
//=============================

/*
Métodos como map, filter e reduce têm os tipos inferidos automaticamente.
*/

const valores = [1, 2, 3, 4];

const dobrados = valores.map((v) => v * 2);          // number[]
const pares = valores.filter((v) => v % 2 === 0);    // number[]
const soma = valores.reduce((acc, v) => acc + v, 0); // number


//======
//TUPLAS
//======

/*
A tupla define a quantidade de elementos e o tipo de cada posição.
*/

let pessoa: [string, number] = ["Ana", 30];

// pessoa = [30, "Ana"];         // Erro: ordem dos tipos incorreta
// pessoa = ["Ana", 30, true];   // Erro: tamanho incorreto


//======================================
//TUPLAS COM NOMES E ELEMENTOS OPCIONAIS
//======================================

/*
Os nomes são apenas documentação (não existem na execução). O "?" torna o elemento opcional.
*/

let coordenada: [x: number, y: number, z?: number] = [10, 20];
coordenada = [10, 20, 30];


//===============
//DESESTRUTURAÇÃO
//===============

/*
A desestruturação extrai os valores de arrays e tuplas para variáveis, mantendo os tipos.
Esse é o formato retornado, por exemplo, pelo useState do React.
*/

const [nome, idade] = pessoa;   // nome: string, idade: number

function dividir(a: number, b: number): [number, number] {
    return [Math.floor(a / b), a % b];
}

const [quociente, resto] = dividir(17, 5);
