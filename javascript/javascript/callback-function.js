//@ts-nocheck

//=================
//CALLBACK FUNCTION
//=================

/*
Uma callback function é uma função passada como argumento para outra função,
para ser executada posteriormente ou em um momento específico.
*/


//=============================
//CRIANDO UMA CALLBACK FUNCTION
//=============================

/*
Uma função pode receber outra função como parâmetro.
A função recebida pode ser executada utilizando os parênteses ().
*/

function executar(callback) {
    callback();
}

function saudacao() {
    console.log("Olá, JavaScript!");
}

executar(saudacao);


//=======================
//CALLBACK COM PARÂMETROS
//=======================

/*
A função que executa a callback pode passar argumentos para ela.
*/

function somar(a, b, callback) {
    callback(a + b);
}

somar(2, 3, function (resultado) {
    console.log(resultado); // 5
});


//===========================
//CALLBACK COM ARROW FUNCTION
//===========================

/*
Uma arrow function também pode ser utilizada como callback.
*/

function processar(numero, callback) {
    console.log(callback(numero));
}

processar(5, n => n * 2); // 10


//=============================
//CALLBACK COM MÉTODOS DE ARRAY
//=============================

/*
Métodos como forEach(), map() e filter() recebem callbacks
para executar uma operação sobre os elementos de um array.
*/

const numeros = [1, 2, 3];

// forEach() executa a callback para cada elemento.
numeros.forEach(numero => console.log(numero));

// map() utiliza a callback para criar um novo array.
const dobrados = numeros.map(numero => numero * 2);

// filter() utiliza a callback para selecionar elementos.
const pares = numeros.filter(numero => numero % 2 === 0);


//===================
//CALLBACK ASSÍNCRONA
//===================

/*
Uma callback também pode ser executada após uma operação assíncrona,
como um temporizador.
*/

setTimeout(() => {
    console.log("Executado após 1 segundo.");
}, 1000);