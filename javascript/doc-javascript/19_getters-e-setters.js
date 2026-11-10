//@ts-nocheck

//=================
//GETTERS E SETTERS
//=================

/*
Getters e setters permitem controlar o acesso e a alteração
de propriedades de um objeto.

get -> executa uma função ao acessar uma propriedade.
set -> executa uma função ao atribuir um valor a uma propriedade.
*/


//============================
//GETTERS E SETTERS EM FACTORY
//============================

/*
Em factory functions, podemos utilizar get e set dentro do objeto
retornado para controlar o acesso às variáveis privadas da função.
*/

function createUser(name, age) {
    return {
        // Getter: acessa o valor como uma propriedade.
        get name() {
            return name;
        },

        // Setter: recebe o novo valor atribuído.
        set name(newName) {
            name = newName;
        },

        get age() {
            return age;
        },

        set age(newAge) {
            if (newAge >= 0) age = newAge;
        }
    };
}

const user = createUser("Vinícius", 26);

console.log(user.name); // Getter -> "Vinícius"

user.name = "João"; // Setter
user.age = 30;

console.log(user.name); // "João"
console.log(user.age);  // 30


//================================
//GETTERS E SETTERS EM CONSTRUCTOR
//================================

/*
Em constructor functions, podemos utilizar get e set dentro
do prototype ou diretamente no objeto utilizando this.
*/

function User(name, age) {
    this._name = name;
    this._age = age;
}

// Getter e setter são definidos no prototype.
Object.defineProperties(User.prototype, {
    name: {
        get() {
            return this._name;
        },
        set(newName) {
            this._name = newName;
        }
    },

    age: {
        get() {
            return this._age;
        },
        set(newAge) {
            if (newAge >= 0) this._age = newAge;
        }
    }
});

const user2 = new User("Vinícius", 26);

console.log(user2.name); // Getter -> "Vinícius"

user2.name = "João"; // Setter
user2.age = 30;

console.log(user2.name); // "João"
console.log(user2.age);  // 30


//================================
//GETTERS E SETTERS COM CLASSES
//================================

/*
Em classes, get e set podem ser declarados diretamente no corpo
da classe, sem precisar utilizar Object.defineProperties().
*/

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (newAge >= 0) this._age = newAge;
    }
}

const person = new Person("Vinícius", 26);

console.log(person.name); // Getter -> "Vinícius"

person.name = "João"; // Setter

console.log(person.name); // "João"