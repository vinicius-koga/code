//@ts-nocheck

//====================
//FUNÇÕES GERADORAS
//====================

/*
Uma função geradora é uma função capaz de pausar sua execução e 
retomá-la posteriormente, preservando seu estado.

Por convenção, sua declaração utiliza function*.
*/


//============================
//CRIANDO UMA FUNÇÃO GERADORA
//============================

/*
A palavra-chave yield pausa a execução da função e retorna um valor.
A execução é retomada quando next() é chamado novamente.
*/

function* generator() {
    yield "Primeiro valor";
    yield "Segundo valor";
    yield "Terceiro valor";
}


//===========================
//EXECUTANDO A FUNÇÃO GERADORA
//===========================

/*
Ao chamar uma função geradora, ela não executa seu código imediatamente.
Em vez disso, retorna um objeto iterador, que controla sua execução.

O método next() retoma a execução até encontrar o próximo yield.
*/

const gen = generator();

console.log(gen.next()); // { value: "Primeiro valor", done: false }
console.log(gen.next()); // { value: "Segundo valor", done: false }
console.log(gen.next()); // { value: "Terceiro valor", done: false }
console.log(gen.next()); // { value: undefined, done: true }


//==============================
//UTILIZANDO YIELD COM VALORES
//==============================

/*
O yield pode receber qualquer tipo de valor, inclusive variáveis
e resultados de expressões.
*/

function* numbers() {
    let number = 1;

    yield number;
    yield number + 1;
    yield number + 2;
}

const num = numbers();

console.log(num.next().value); // 1
console.log(num.next().value); // 2
console.log(num.next().value); // 3


//================================
//UTILIZANDO YIELD COM ITERAÇÕES
//================================

/*
Uma função geradora pode utilizar estruturas de repetição
para produzir vários valores ao longo de sua execução.
*/

function* count() {
    for (let i = 1; i <= 3; i++) {
        yield i;
    }
}

const counter = count();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3


//====================================
//ITERANDO COM O FOR...OF
//====================================

/*
Como o objeto retornado por uma função geradora é iterável,
podemos utilizar o for...of para percorrer seus valores.

A cada iteração, o next() é chamado automaticamente.
*/

function* colors() {
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
}

for (const color of colors()) {
    console.log(color);
}
// Vermelho
// Verde
// Azul


//================================
//UTILIZANDO YIELD* (DELEGAÇÃO)
//================================

/*
O yield* permite delegar a execução para outra função geradora
ou outro objeto iterável, retornando seus valores individualmente.
*/

function* first() {
    yield 1;
    yield 2;
}

function* second() {
    yield* first();
    yield 3;
}

for (const value of second()) {
    console.log(value); // 1, 2, 3
}


//===============================
//ENCERRANDO UMA FUNÇÃO GERADORA
//===============================

/*
O método return() encerra a execução da função geradora.
Após isso, novas chamadas de next() não retomam sua execução.
*/

function* example() {
    yield 1;
    yield 2;
    yield 3;
}

const gen2 = example();

console.log(gen2.next());   // { value: 1, done: false }
console.log(gen2.return()); // { value: undefined, done: true }