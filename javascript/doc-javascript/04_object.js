
// @ts-nocheck

//================
// CRIANDO OBJETOS
//================

/*
Um objeto é uma estrutura que armazena dados e funcionalidades
através de propriedades (atributos) e métodos (funções).
*/


//============================
// 1. OBJECT LITERAL
//============================

/*
É a forma mais simples e comum de criar objetos.
*/

const user = {
    name: "Vinicius",
    age: 26,

    greet() {
        console.log("Olá!");
    }
};


//============================
// 2. OBJECT CONSTRUCTOR
//============================

/*
Utiliza new Object() para criar um objeto vazio.
As propriedades e métodos são adicionados posteriormente.
*/

const product = new Object();

product.name = "Notebook";
product.price = 3000;

product.buy = function() {
    console.log("Produto comprado!");
};


//============================
// 3. OBJECT.CREATE()
//============================

/*
Cria um objeto utilizando outro objeto como protótipo.
O objeto criado herda propriedades e métodos do protótipo.
*/

const person = {
    greet() {
        console.log("Olá!");
    }
};

const developer = Object.create(person);

developer.name = "Vinicius";

developer.greet(); // Método herdado


//============================
// 4. CONSTRUCTOR FUNCTION
//============================

/*
Uma função construtora permite criar vários objetos
com a mesma estrutura utilizando a palavra-chave new.
*/

function User(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Olá, ${this.name}!`);
    };
}

const user1 = new User("Vinicius", 26);
const user2 = new User("Ana", 22);


//============================
// 5. CLASSES
//============================

/*
Classes são uma forma moderna de criar objetos com uma
estrutura definida. O constructor inicializa as propriedades.
*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} está fazendo barulho.`);
    }
}

const dog = new Animal("Rex", 5);


//============================
// 6. OBJECT.ASSIGN()
//============================

/*
Cria um novo objeto copiando as propriedades de outro objeto.
A cópia é superficial (shallow copy).
*/

const original = {
    name: "Vinicius",
    age: 26
};

const copy = Object.assign({}, original);


//============================
// 7. SPREAD OPERATOR (...)
//============================

/*
Também permite criar uma cópia superficial de um objeto,
espalhando suas propriedades dentro de um novo objeto.
*/

const copy2 = { ...original };


//============================
// ACESSANDO PROPRIEDADES
//============================

/*
Existem duas formas principais de acessar propriedades
de um objeto: notação de ponto e notação de colchetes.
*/

// Notação de ponto (dot notation).
user.name; // "Vinicius"
user.age;  // 26

// Notação de colchetes (bracket notation).
user["name"]; // "Vinicius"
user["age"];  // 26

/*
A notação de colchetes permite utilizar variáveis
como nomes de propriedades.
*/

const property = "name";

user[property]; // "Vinicius"


//============================
// ACESSANDO PROPRIEDADES ANINHADAS
//============================

/*
Objetos podem conter outros objetos como propriedades.
Podemos acessar seus valores encadeando os acessos.
*/

const account = {
    user: {
        name: "Vinicius",
        address: {
            city: "Santo André"
        }
    }
};

account.user.name; // "Vinicius"
account.user.address.city; // "Santo André"


//============================
// OPTIONAL CHAINING (?.)
//============================

/*
Permite acessar propriedades aninhadas sem gerar erro
quando algum valor intermediário é null ou undefined.
*/

const city = account.user?.address?.city;

const phone = account.user?.phone?.number;
// undefined


//============================
// ACESSANDO MÉTODOS
//============================

/*
Métodos são funções armazenadas como propriedades de objetos.
Podem ser chamados utilizando ponto ou colchetes.
*/

user.greet(); // Notação de ponto

user["greet"](); // Notação de colchetes

/*
Também podemos acessar métodos herdados do protótipo.
*/

user.toString();


//============================
// ADICIONANDO PROPRIEDADES
//============================

/*
Podemos adicionar novos atributos e métodos a um objeto
mesmo depois de sua criação.
*/

user.email = "vinicius@email.com";

user.sayHello = function() {
    console.log("Olá!");
};

user.sayHello();


//============================
// ALTERANDO PROPRIEDADES
//============================

/*
Basta atribuir um novo valor à propriedade existente.
*/

user.name = "Carlos";
user["age"] = 30;


//============================
// REMOVENDO PROPRIEDADES
//============================

/*
O operador delete remove uma propriedade do objeto.
*/

delete user.email;


//============================
// VERIFICANDO PROPRIEDADES
//============================

/*
O operador in verifica se uma propriedade existe
no objeto ou em sua cadeia de protótipos.
*/

"name" in user; // true
"email" in user; // false

/*
Object.hasOwn() verifica se a propriedade pertence
diretamente ao objeto, sem considerar propriedades herdadas.
*/

Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "toString"); // false


//============================
// DESESTRUTURAÇÃO
//============================

/*
Permite extrair propriedades de um objeto e armazená-las
diretamente em variáveis.
*/

const { name, age } = user;

console.log(name);
console.log(age);

/*
Também permite renomear propriedades e definir valores padrão.
*/

const { name: username, email = "Não informado" } = user;


//============================
// DESESTRUTURAÇÃO ANINHADA
//============================

/*
Permite extrair propriedades de objetos dentro de outros objetos.
*/

const { user: { name: accountName } } = account;


//============================
// ITERANDO PROPRIEDADES
//============================

/*
for...in percorre as propriedades enumeráveis do objeto,
incluindo as herdadas.
*/

for (const key in user) {
    console.log(key, user[key]);
}

/*
Object.keys() retorna apenas as chaves próprias e enumeráveis.
*/

Object.keys(user).forEach((key) => {
    console.log(key, user[key]);
});
