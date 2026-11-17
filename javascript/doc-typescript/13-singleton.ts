//@ts-nocheck

//=========
//SINGLETON
//=========

/*
Singleton é um padrão de projeto que garante que uma classe tenha
apenas uma instância durante a execução da aplicação.

Ele também fornece um ponto de acesso global a essa instância.
*/


//====================
//CRIANDO UM SINGLETON
//====================

/*
O construtor private impede que outras partes do código
criem instâncias da classe utilizando new.

A própria classe fica responsável por criar sua única instância.
*/

class Database {
    private static instance: Database | null = null;

    private constructor() {}

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}


//===========================
//ACESSANDO A INSTÂNCIA
//===========================

/*
O método estático getInstance() permite acessar a instância
sem precisar criar um objeto utilizando new.

Na primeira chamada, uma instância é criada.
Nas próximas chamadas, a mesma instância é retornada.
*/

const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2); // true


//===============================
//COMPARTILHANDO ESTADO
//===============================

/*
Como todos recebem a mesma instância, as alterações feitas
por um objeto são visíveis para os demais.
*/

class Counter {
    private static instance: Counter;

    private count = 0;

    private constructor() {}

    static getInstance(): Counter {
        if (!Counter.instance) {
            Counter.instance = new Counter();
        }

        return Counter.instance;
    }

    increment(): void {
        this.count++;
    }

    getCount(): number {
        return this.count;
    }
}

const counter1 = Counter.getInstance();
const counter2 = Counter.getInstance();

counter1.increment();

console.log(counter2.getCount()); // 1