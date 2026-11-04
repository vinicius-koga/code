
//@ts-nocheck

//================
//FUNÇÃO RECURSIVA
//================

/*
Uma função recursiva é uma função que chama a si mesma
para resolver um problema em etapas menores.

Ela precisa de uma condição de parada para evitar
chamadas infinitas.
*/


//=========================
//CRIANDO UMA FUNÇÃO RECURSIVA
//=========================

/*
A cada chamada, n diminui até atingir a condição de parada.
*/

function countdown(n) {
    if (n <= 0) return; // Condição de parada

    console.log(n);
    countdown(n - 1); // Chamada recursiva
}

countdown(3); // 3, 2, 1


//======================
//RETORNANDO UM RESULTADO
//======================

/*
A recursão também pode retornar valores.
Neste exemplo, calcula o fatorial de um número.
*/

function factorial(n) {
    if (n <= 1) return 1; // Caso base

    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
