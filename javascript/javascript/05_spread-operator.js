
//@ts-nocheck

//================
//SPREAD OPERATOR
//================

/*
O Spread Operator (...) permite expandir os elementos
de um array ou as propriedades de um objeto.
*/


//=========================
//SPREAD EM ARRAYS
//=========================

/*
Expande os elementos de um array individualmente.
Pode ser utilizado para copiar ou combinar arrays.
*/

const numbers = [1, 2, 3];

const copy = [...numbers];
const combined = [...numbers, 4, 5];

console.log(copy);     // [1, 2, 3]
console.log(combined); // [1, 2, 3, 4, 5]


//==========================
//SPREAD EM OBJETOS
//==========================

/*
Expande as propriedades de um objeto.
Se houver propriedades repetidas, a última prevalece.
*/

const user = { name: "Ana", age: 20 };

const copy = { ...user };
const updated = { ...user, age: 21 };

console.log(copy);    // { name: "Ana", age: 20 }
console.log(updated); // { name: "Ana", age: 21 }


//==========================
//SPREAD EM FUNÇÕES
//==========================

/*
Expande os elementos de um array como argumentos
individuais de uma função.
*/

const numbers = [10, 20, 30];

console.log(Math.max(...numbers)); // 30
