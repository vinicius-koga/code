
//@ts-nocheck

//===================
//MÉTODOS DE ARRAYS
//===================

/*
Arrays possuem métodos para adicionar, remover, buscar,
transformar e percorrer elementos.
*/

const numbers = [1, 2, 3, 4, 5];


//====================
//ADICIONAR E REMOVER
//====================

/*
push() -> adiciona ao final.
pop() -> remove o último elemento.
unshift() -> adiciona ao início.
shift() -> remove o primeiro elemento.
*/

numbers.push(6);
numbers.pop();
numbers.unshift(0);
numbers.shift();


//=================
//TRANSFORMAR ARRAY
//=================

/*
map() -> cria um novo array transformando cada elemento.
filter() -> cria um novo array com elementos que passam na condição.
*/

const doubled = numbers.map(n => n * 2);
const even = numbers.filter(n => n % 2 === 0);


//=================
//BUSCAR ELEMENTOS
//=================

/*
find() -> retorna o primeiro elemento que atende à condição.
includes() -> verifica se um valor existe no array.
indexOf() -> retorna o índice do valor ou -1 se não existir.
*/

numbers.find(n => n > 3);
numbers.includes(3);
numbers.indexOf(4);


//=====================
//VERIFICAR CONDIÇÕES
//=====================

/*
some() -> true se pelo menos um elemento passar na condição.
every() -> true se todos os elementos passarem na condição.
*/

numbers.some(n => n > 4);
numbers.every(n => n > 0);


//====================
//REDUZIR A UM VALOR
//====================

/*
reduce() -> percorre o array acumulando um resultado.
O segundo argumento (0) é o valor inicial do acumulador.
*/

const sum = numbers.reduce((total, n) => total + n, 0);


//===================
//ORDENAR E INVERTER
//===================

/*
sort() -> ordena os elementos e modifica o array original.
reverse() -> inverte a ordem e modifica o array original.
Para números, use (a, b) => a - b na ordem crescente.
*/

numbers.sort((a, b) => a - b);
numbers.reverse();


//====================
//PERCORRER ELEMENTOS
//====================

/*
forEach() -> executa uma função para cada elemento.
Não cria um novo array como retorno.
*/

numbers.forEach(n => console.log(n));
