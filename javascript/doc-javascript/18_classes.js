//@ts-nocheck
//================
//CLASSES EM JS
//================

/*
Uma classe é um modelo (blueprint) utilizado para criar objetos.
Ela permite organizar atributos e métodos em uma mesma estrutura.

new -> cria uma instância da classe.
*/

//================
//CRIANDO UMA CLASSE
//================

/*
class -> palavra-chave utilizada para declarar uma classe.
constructor() -> método especial executado automaticamente ao criar uma instância.
this -> referencia a própria instância do objeto.
*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


//==========================
//CRIANDO MÉTODOS NA CLASSE
//==========================

/*
Métodos são funções definidas dentro da classe.
Não é necessário utilizar a palavra-chave function.
*/

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Olá, ${this.name}!`;
    }
}


//=============================
//CRIANDO UMA INSTÂNCIA DA CLASSE
//=============================

/*
new -> cria um novo objeto utilizando a classe como modelo.
Cada instância possui seus próprios atributos.
*/

const user1 = new User("Vinícius", 26);
const user2 = new User("Maria", 25);


//========================
//ACESSANDO ATRIBUTOS
//========================

/*
Podemos acessar os atributos utilizando a notação de ponto.
*/

console.log(user1.name); // Vinícius
console.log(user1.age);  // 26


//=====================
//CHAMANDO MÉTODOS
//=====================

/*
Os métodos são chamados através da instância da classe.
*/

console.log(user1.sayHello()); // Olá, Vinícius!


//=====================
//GETTERS E SETTERS
//=====================

/*
get -> permite acessar um método como se fosse um atributo.
set -> permite definir um valor através de uma atribuição.

São utilizados para controlar o acesso aos atributos.
*/

class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const user = new User("Vinícius");

console.log(user.name); // Vinícius

user.name = "Carlos";


//=====================
//ATRIBUTOS ESTÁTICOS
//=====================

/*
static -> cria atributos pertencentes à própria classe,
e não às suas instâncias.
*/

class User {
    static role = "Admin";
}

console.log(User.role); // Admin


//=====================
//MÉTODOS ESTÁTICOS
//=====================

/*
Métodos static podem ser chamados diretamente pela classe,
sem precisar criar uma instância.
*/

class Calculator {
    static sum(a, b) {
        return a + b;
    }
}

console.log(Calculator.sum(10, 5)); // 15


//=====================
//HERANÇA ENTRE CLASSES
//=====================

/*
extends -> permite que uma classe herde atributos e métodos de outra.
A classe que herda é chamada de subclasse.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} fez um som.`;
    }
}

class Dog extends Animal {
    bark() {
        return `${this.name} latiu!`;
    }
}

const dog = new Dog("Rex");

console.log(dog.speak());
console.log(dog.bark());


//=====================
//UTILIZANDO SUPER()
//=====================

/*
super() -> chama o constructor da classe pai.
Deve ser executado antes de utilizar this no constructor da subclasse.
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const dog = new Dog("Rex", "Labrador");


//=====================
//SOBRESCREVENDO MÉTODOS
//=====================

/*
Uma subclasse pode substituir um método herdado,
implementando seu próprio comportamento.
*/

class Animal {
    speak() {
        return "Som de animal";
    }
}

class Dog extends Animal {
    speak() {
        return "Au au!";
    }
}

const dog = new Dog();

console.log(dog.speak()); // Au au!


//=====================
//CAMPOS PRIVADOS
//=====================

/*
# -> declara um atributo ou método privado.
Só pode ser acessado dentro da própria classe.
*/

class BankAccount {
    #balance = 0;

    deposit(value) {
        this.#balance += value;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance);  // Erro