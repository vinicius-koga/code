//=================
//1. ENCAPSULAMENTO
//=================

/*
Controla o acesso aos atributos e métodos de uma classe,
protegendo seus dados contra modificações indevidas.

# -> declara membros privados.
get/set -> permitem controlar o acesso aos atributos.
*/

class BankAccount {
    #balance = 0;

    deposit(value) {
        if (value > 0) {
            this.#balance += value;
        }
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(100);

console.log(account.balance); // 100
// account.#balance; // Erro


//============
//2. ABSTRAÇÃO
//============

/*
Esconde detalhes internos de implementação,
expondo somente o necessário para utilizar o objeto.

O usuário utiliza os métodos públicos sem precisar
conhecer como suas funcionalidades são executadas.
*/

class Car {
    start() {
        this.#startEngine();
        return "Carro ligado!";
    }

    #startEngine() {
        console.log("Iniciando motor...");
    }
}

const car = new Car();

console.log(car.start());


//==========
//3. HERANÇA
//==========

/*
Permite que uma classe herde atributos e métodos de outra,
reutilizando funcionalidades.

extends -> estabelece a herança.
super() -> chama o constructor da classe pai.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} está comendo.`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} latiu!`;
    }
}

const dog = new Dog("Rex");

console.log(dog.eat());
console.log(dog.bark());


//===============
//4. POLIMORFISMO
//===============

/*
Permite que diferentes classes utilizem o mesmo método,
mas apresentem comportamentos diferentes.

Override -> sobrescrita de um método herdado.
*/

class Animal {
    speak() {
        return "Som genérico";
    }
}

class Dog extends Animal {
    speak() {
        return "Au au!";
    }
}

class Cat extends Animal {
    speak() {
        return "Miau!";
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => {
    console.log(animal.speak());
});

// Au au!
// Miau!