//@ts-nocheck

//=====================
//CONSTRUTOR Array()
//=====================

/*
Array é uma função construtora nativa do JavaScript que permite criar arrays.
Também disponibiliza métodos estáticos para criar e verificar arrays.
*/

//=====================
//CRIANDO UM ARRAY
//=====================

/*
Array() pode receber vários argumentos, que serão os elementos do array.
Se receber apenas um número inteiro, cria um array com esse tamanho.
*/

const fruits = Array("Maçã", "Banana", "Uva");
const numbers = Array(10, 20, 30);
const emptyArray = Array(3); // Três posições vazias


//=====================
//Array.from()
//=====================

/*
Cria um array a partir de um iterável ou objeto semelhante a array.
O segundo argumento opcional permite transformar cada elemento.
*/

const letters = Array.from("ABC");
// ["A", "B", "C"]

const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5]


//=====================
//Array.of()
//=====================

/*
Cria um array utilizando os argumentos como elementos.
Diferentemente de Array(3), Array.of(3) cria um array com o número 3.
*/

const numbersArray = Array.of(10, 20, 30);
// [10, 20, 30]

const singleNumber = Array.of(3);
// [3]


//=========================
//Array.isArray()
//=========================

/*
Verifica se um valor é um array.
Retorna true ou false.
*/

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));        // false


//=====================
//Array.fromAsync()
//=====================

/*
Cria um array a partir de um iterável assíncrono ou síncrono.
Retorna uma Promise, que precisa ser aguardada com await.
Disponível em ambientes JavaScript modernos.
*/

async function example() {
    const values = await Array.fromAsync([1, 2, 3]);

    console.log(values); // [1, 2, 3]
}