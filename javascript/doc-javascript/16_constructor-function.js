
// @ts-nocheck

//==================
//FUNÇÃO CONSTRUTORA
//==================

/*
Uma função construtora é uma função utilizada para criar objetos.
Por convenção, seu nome começa com letra maiúscula.
*/

//==============================
//CRIANDO UMA FUNÇÃO CONSTRUTORA
//==============================

/*
O this representa o objeto que está sendo construído.
Os parâmetros permitem definir os valores de cada objeto.
*/

function User(name, age) {
    this.name = name;
    this.age = age;
}


//=======================
//CRIANDO OBJETOS COM NEW
//=======================

/*
A palavra-chave new cria um novo objeto a partir da função construtora.

Ela executa quatro etapas:
1. Cria um novo objeto vazio.
2. Define o this como esse novo objeto.
3. Executa a função construtora.
4. Retorna o objeto criado automaticamente.
*/

const user1 = new User("Vinicius", 26);
const user2 = new User("Ana", 22);


//=========================
//ACESSANDO AS PROPRIEDADES
//=========================

/*
Cada objeto possui suas próprias propriedades e valores,
mesmo que tenham sido criados pela mesma função construtora.
*/

console.log(user1.name); // Vinicius
console.log(user2.name); // Ana


//===================
//ADICIONANDO MÉTODOS
//===================

/*
Métodos são funções armazenadas como propriedades de um objeto.
Podemos criá-los diretamente dentro da função construtora.
*/

function User(name, age) {
    this.name = name;
    this.age = age;

    this.introduce = function() {
        console.log(`Olá, sou ${this.name} e tenho ${this.age} anos.`);
    };
}

const user = new User("Vinicius", 26);

user.introduce();


//======================
//UTILIZANDO O PROTOTYPE
//======================

/*
O prototype permite compartilhar métodos entre todos os objetos
criados pela mesma função construtora, evitando duplicação de funções.
*/

function User(name, age) {
    this.name = name;
    this.age = age;
}

User.prototype.introduce = function() {
    console.log(`Olá, sou ${this.name} e tenho ${this.age} anos.`);
};

const user3 = new User("Vinicius", 26);
const user4 = new User("Ana", 22);

user3.introduce();
user4.introduce();
