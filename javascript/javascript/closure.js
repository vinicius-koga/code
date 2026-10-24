
//@ts-nocheck

//========
//CLOSURE
//========

/*
Closure ocorre quando uma função consegue acessar variáveis
do escopo externo mesmo após a função externa ter terminado.
*/


//=======================
//CRIANDO UM CLOSURE
//=======================

/*
A função interna mantém acesso à variável count,
mesmo depois que a função externa termina.
*/

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


//=============================
//CLOSURES INDEPENDENTES
//=============================

/*
Cada chamada da função externa cria um novo escopo.
Por isso, cada closure mantém suas próprias variáveis.
*/

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
