//@ts-nocheck

//================
//CLOSURES EM JS
//================

/*
Closure ocorre quando uma função mantém acesso às variáveis
do escopo léxico em que foi criada, mesmo após esse escopo terminar.
*/


//=====================
//CRIANDO UMA CLOSURE
//=====================

/*
A função interna consegue acessar variáveis da função externa,
mesmo quando a função externa já terminou sua execução.
*/

function createCounter() {
    let count = 0;

    return () => {
        count++;
        console.log(count);
    }
}
//              | aqui é onde o closure (escopo da função externa) é passado para a variável. 
const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3


//=============================
//MANTENDO ESTADO COM CLOSURES
//=============================

/*
Cada chamada de createCounter() cria um novo escopo,
com sua própria variável count, independente das demais.
*/

const counterA = createCounter();
const counterB = createCounter();

counterA(); // 1
counterA(); // 2
counterB(); // 1


//============================
//ACESSANDO VARIÁVEIS EXTERNAS
//============================

/*
A closure mantém acesso às variáveis do escopo léxico,
não apenas aos valores que existiam quando foi criada.
*/

function createMessage() {
    let message = "Olá";

    return function () {
        console.log(message);
    };
}

const showMessage = createMessage();

showMessage(); // "Olá"


//===============================
//ENCAPSULANDO VARIÁVEIS PRIVADAS
//===============================

/*
Variáveis locais não podem ser acessadas diretamente de fora,
mas podem ser manipuladas pelas funções que formam a closure.
*/

function createBankAccount() {
    let balance = 0;

    return {
        deposit(value) {
            balance += value;
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();

account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.balance);      // undefined