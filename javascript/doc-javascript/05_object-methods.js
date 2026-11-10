
// @ts-nocheck

//================
// MÉTODOS DE OBJECT
//================

/*
Object é um objeto nativo do JavaScript que fornece métodos
para criar, consultar, copiar e manipular outros objetos.
*/

//========================
// Object.keys()
//========================

/*
Retorna um array com as chaves (propriedades) enumeráveis
e próprias do objeto.
*/

const user = { name: "Vinicius", age: 26 };

Object.keys(user);
// ["name", "age"]


//==========================
// Object.values()
//==========================

/*
Retorna um array com os valores das propriedades
enumeráveis e próprias do objeto.
*/

Object.values(user);
// ["Vinicius", 26]


//============================
// Object.entries()
//============================

/*
Retorna um array contendo pares [chave, valor]
de cada propriedade enumerável e própria.
*/

Object.entries(user);
// [["name", "Vinicius"], ["age", 26]]


//============================
// Object.fromEntries()
//============================

/*
Transforma um array de pares [chave, valor] em um objeto.
É o processo inverso de Object.entries().
*/

const entries = [["name", "Vinicius"], ["age", 26]];

Object.fromEntries(entries);
// { name: "Vinicius", age: 26 }


//==========================
// Object.assign()
//==========================

/*
Copia as propriedades enumeráveis e próprias de um ou
mais objetos para um objeto de destino.
*/

const address = { city: "Santo André" };

Object.assign(user, address);
// { name: "Vinicius", age: 26, city: "Santo André" }


//=========================
// Object.hasOwn()
//=========================

/*
Verifica se o objeto possui determinada propriedade própria,
sem considerar propriedades herdadas.
*/

Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "toString"); // false


//============================
// Object.freeze()
//============================

/*
Impede a adição, remoção ou alteração de propriedades
do objeto. A proteção é superficial (shallow).
*/

const config = { theme: "dark" };

Object.freeze(config);

config.theme = "light"; // Não altera
config.language = "pt-BR"; // Não adiciona


//============================
// Object.seal()
//============================

/*
Impede adicionar ou remover propriedades, mas permite
alterar os valores das propriedades existentes.
*/

const settings = { theme: "dark" };

Object.seal(settings);

settings.theme = "light"; // Altera
settings.language = "pt-BR"; // Não adiciona


//===============================
// Object.isFrozen()
//===============================

/*
Verifica se um objeto está congelado pelo Object.freeze().
*/

Object.isFrozen(config); // true


//==============================
// Object.isSealed()
//==============================

/*
Verifica se um objeto está selado pelo Object.seal()
ou congelado pelo Object.freeze().
*/

Object.isSealed(settings); // true


//==================================
// Object.isExtensible()
//==================================

/*
Verifica se novas propriedades podem ser adicionadas
ao objeto.
*/

Object.isExtensible(user); // true


//================================
// Object.preventExtensions()
//================================

/*
Impede que novas propriedades sejam adicionadas ao objeto,
mas permite alterar ou remover propriedades existentes.
*/

const product = { name: "Notebook" };

Object.preventExtensions(product);

product.price = 3000; // Não adiciona


//=============================
// Object.create()
//=============================

/*
Cria um novo objeto utilizando outro objeto como protótipo.
O protótipo permite compartilhar propriedades e métodos.
*/

const person = {
    greet() {
        console.log("Olá!");
    }
};

const developer = Object.create(person);

developer.greet(); // "Olá!"


//===============================
// Object.getPrototypeOf()
//===============================

/*
Retorna o protótipo de um objeto.
*/

Object.getPrototypeOf(developer) === person; // true


//================================
// Object.setPrototypeOf()
//================================

/*
Define o protótipo de um objeto.
Seu uso frequente pode prejudicar a performance.
*/

const animal = { sound: "Som" };
const dog = {};

Object.setPrototypeOf(dog, animal);

dog.sound; // "Som"


//=================================
// Object.getOwnPropertyNames()
//=================================

/*
Retorna todas as propriedades próprias do objeto,
incluindo as não enumeráveis.
*/

const example = { name: "JavaScript" };

Object.getOwnPropertyNames(example);
// ["name"]


//=====================================
// Object.getOwnPropertyDescriptor()
//=====================================

/*
Retorna os detalhes de uma propriedade, como:
value, writable, enumerable e configurable.
*/

Object.getOwnPropertyDescriptor(example, "name");


//======================================
// Object.getOwnPropertyDescriptors()
//======================================

/*
Retorna os descritores de todas as propriedades
próprias do objeto.
*/

Object.getOwnPropertyDescriptors(example);


//================================
// Object.defineProperty()
//================================

/*
Cria ou modifica uma propriedade, permitindo configurar
seu comportamento através de um descritor.
*/

Object.defineProperty(example, "version", {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});


//===================================
// Object.defineProperties()
//===================================

/*
Permite criar ou modificar várias propriedades
utilizando seus respectivos descritores.
*/

Object.defineProperties(example, {
    author: {
        value: "Mozilla",
        enumerable: true
    },
    active: {
        value: true,
        enumerable: true
    }
});


//====================================
// Object.is()
//====================================

/*
Compara dois valores para verificar se são exatamente iguais.
Diferentemente de ===, considera NaN igual a NaN e
diferencia +0 de -0.
*/

Object.is(10, 10); // true
Object.is(NaN, NaN); // true
Object.is(+0, -0); // false


//================================
// Object.groupBy()
//================================

/*
Agrupa os elementos de um iterável em um objeto,
utilizando o resultado de uma função como chave.
*/

const numbers = [1, 2, 3, 4, 5, 6];

Object.groupBy(numbers, (number) => {
    return number % 2 === 0 ? "even" : "odd";
});

// { odd: [1, 3, 5], even: [2, 4, 6] }


//================================
// Object.fromEntries() + entries
//================================

/*
Podemos combinar entries() e fromEntries() para
transformar propriedades de um objeto.
*/

const prices = { apple: 10, banana: 5, orange: 8 };

const discounted = Object.fromEntries(
    Object.entries(prices).map(([key, value]) => {
        return [key, value * 0.9];
    })
);

// { apple: 9, banana: 4.5, orange: 7.2 }


//================================
// MÉTODOS DE INSTÂNCIA
//================================

/*
Objetos também herdam métodos do Object.prototype,
que podem ser utilizados diretamente em suas instâncias.
*/

// toString() -> retorna uma representação em string.
user.toString();

// valueOf() -> retorna o valor primitivo do objeto, quando disponível.
user.valueOf();

// hasOwnProperty() -> verifica se possui uma propriedade própria.
user.hasOwnProperty("name"); // true

// isPrototypeOf() -> verifica se um objeto está na cadeia de protótipos.
person.isPrototypeOf(developer); // true

// propertyIsEnumerable() -> verifica se uma propriedade própria é enumerável.
user.propertyIsEnumerable("name"); // true
