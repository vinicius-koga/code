
// @ts-nocheck

//==========
//PROTOTYPES
//==========

/*
Todo objeto JavaScript possui uma referência interna chamada [[Prototype]].

O prototype permite que objetos compartilhem propriedades e métodos
com outros objetos por meio da cadeia de protótipos (Prototype Chain).

Quando uma propriedade não é encontrada no próprio objeto, o JavaScript
procura automaticamente em seu prototype.
*/


//==================================
//ACESSANDO O PROTOTYPE DE UM OBJETO
//==================================

/*
Object.getPrototypeOf() retorna o prototype de um objeto.
Object.setPrototypeOf() permite alterar o prototype de um objeto.
*/

const person = {
    name: "Vinicius"
};

const prototype = Object.getPrototypeOf(person);

console.log(prototype); // Object.prototype


//=============================
//CRIANDO OBJETOS COM PROTOTYPE
//=============================

/*
Object.create() cria um novo objeto utilizando outro objeto
como seu prototype.
*/

const personPrototype = {
    greet() {
        console.log(`Olá, ${this.name}!`);
    }
};

const user = Object.create(personPrototype);

user.name = "Vinicius";

user.greet(); // Olá, Vinicius!


//==================================
//HERANÇA ATRAVÉS DA PROTOTYPE CHAIN
//==================================

/*
Um objeto pode herdar propriedades e métodos de outro objeto.

A busca percorre a cadeia de protótipos até encontrar a propriedade
ou chegar ao final da cadeia, que é null.
*/

const animal = {
    eat() {
        console.log("Comendo...");
    }
};

const dog = Object.create(animal);

dog.bark = function() {
    console.log("Au au!");
};

dog.eat();  // Herdado de animal
dog.bark(); // Próprio de dog

console.log(Object.getPrototypeOf(dog) === animal); // true


//================================
//PROPRIEDADES PRÓPRIAS E HERDADAS
//================================

/*
Object.hasOwn() verifica se uma propriedade pertence diretamente
ao objeto, sem considerar sua cadeia de protótipos.

in verifica se a propriedade existe no objeto ou em seus prototypes.
*/

const vehicle = {
    start() {
        console.log("Ligando...");
    }
};

const car = Object.create(vehicle);

car.brand = "Toyota";

console.log(Object.hasOwn(car, "brand")); // true
console.log(Object.hasOwn(car, "start")); // false

console.log("brand" in car); // true
console.log("start" in car); // true


//=================================
//CONSTRUCTOR FUNCTIONS E PROTOTYPE
//=================================

/*
Toda função tradicional pode ser utilizada como construtora.

Ao utilizar new, o JavaScript cria um objeto e configura seu prototype
com base na propriedade prototype da função construtora.

A propriedade prototype da função é diferente do [[Prototype]]
dos objetos criados por ela.
*/

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Olá, ${this.name}!`);
};

const person1 = new Person("Vinicius");
const person2 = new Person("Maria");

person1.greet();
person2.greet();

// Os dois objetos compartilham o mesmo método.
console.log(person1.greet === person2.greet); // true

console.log(
    Object.getPrototypeOf(person1) === Person.prototype
); // true


//=======================
//PROPRIEDADE CONSTRUCTOR
//=======================

/*
Por padrão, o prototype de uma função construtora possui
uma propriedade constructor que referencia a própria função.

Ela não cria objetos automaticamente, apenas mantém essa referência.
*/

console.log(person1.constructor === Person); // true

console.log(Person.prototype.constructor === Person); // true


//=====================
//ALTERANDO O PROTOTYPE
//=====================

/*
Podemos adicionar ou modificar métodos no prototype.

Todos os objetos que utilizam esse prototype passam a ter acesso
às alterações, inclusive os criados anteriormente.
*/

Person.prototype.sayName = function () {
    console.log(this.name);
};

person1.sayName();
person2.sayName();


//========================
//SUBSTITUINDO O PROTOTYPE
//========================

/*
Também podemos substituir completamente o prototype de uma função.

A propriedade constructor precisa ser restaurada manualmente,
pois a substituição remove a referência original.
*/

function User(name) {
    this.name = name;
}

User.prototype = {
    constructor: User,

    greet() {
        console.log(`Olá, ${this.name}!`);
    }
};

const user1 = new User("João");

user1.greet();

console.log(user1.constructor === User); // true


//=====================
//VERIFICANDO A HERANÇA
//=====================

/*
instanceof verifica se o prototype de uma função construtora
está presente na cadeia de protótipos de um objeto.
*/

console.log(user1 instanceof User); // true
console.log(user1 instanceof Object); // true


//===================================
//HERANÇA ENTRE CONSTRUCTOR FUNCTIONS
//===================================

/*
Object.create() permite estabelecer a herança entre prototypes.

O método call() executa uma função utilizando outro objeto como this,
permitindo reutilizar as propriedades da construtora pai.
*/

// Animal
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function () {
    console.log(`${this.name} está comendo.`);
};

// Animal --> Dog
function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}
// Dog herda os métodos de Animal.
Dog.prototype = Object.create(Animal.prototype);
// Adicionando um método próprio.
Dog.prototype.bark = function () {
    console.log("Au au!");
};

const dog1 = new Dog("Rex", "Labrador");

dog1.eat();  // Herdado de Animal
dog1.bark(); // Próprio de Dog

console.log(dog1 instanceof Dog);    // true
console.log(dog1 instanceof Animal); // true


//================================
//PROTOTYPES NATIVOS DO JAVASCRIPT
//================================

/*
Objetos nativos também possuem prototypes.

Exemplos:
- Array.prototype
- String.prototype
- Number.prototype
- Function.prototype
- Object.prototype

Seus métodos são compartilhados entre as instâncias.
*/

const numbers = [1, 2, 3];

console.log(
    Object.getPrototypeOf(numbers) === Array.prototype
); // true

console.log(
    Object.getPrototypeOf(Array.prototype) === Object.prototype
); // true

console.log(
    Object.getPrototypeOf(Object.prototype)
); // null
