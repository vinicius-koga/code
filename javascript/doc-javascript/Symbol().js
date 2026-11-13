//@ts-nocheck

//================
//SYMBOL()
//================

/*
Symbol() cria um valor primitivo único e imutável.
Mesmo com a mesma descrição, dois Symbols nunca são iguais.

É utilizado principalmente para criar identificadores únicos
e evitar conflitos entre propriedades de objetos.
*/


//=======================
//CRIANDO UM SYMBOL
//=======================

/*
Symbol() -> cria um novo Symbol.
A descrição é opcional e serve apenas para identificação.
*/

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false


//=============================
//SYMBOL COMO PROPRIEDADE
//=============================

/*
Um Symbol pode ser utilizado como chave de uma propriedade.
Diferentemente de strings, Symbols não entram em conflitos
com outras propriedades que possuem o mesmo nome.
*/

const id = Symbol("id");

const usuario = {
    nome: "Vinícius",
    [id]: 123
};

console.log(usuario[id]); // 123


//================================
//ACESSANDO PROPRIEDADES SYMBOL
//================================

/*
Object.keys() e Object.values() não retornam propriedades Symbol.

Object.getOwnPropertySymbols() -> retorna as chaves Symbol próprias.
Reflect.ownKeys() -> retorna todas as chaves próprias (string e Symbol).
*/

console.log(Object.keys(usuario)); // ["nome"]

console.log(Object.getOwnPropertySymbols(usuario)); // [Symbol(id)]

console.log(Reflect.ownKeys(usuario)); // ["nome", Symbol(id)]


//==============================
//SYMBOL.FOR() E SYMBOL.KEYFOR()
//==============================

/*
Symbol.for() -> procura um Symbol em um registro global.
Se não existir, cria e registra um novo.
Symbols com a mesma chave são reutilizados.

Symbol.keyFor() -> retorna a chave de um Symbol registrado globalmente.
*/

const s1 = Symbol.for("usuario");
const s2 = Symbol.for("usuario");

console.log(s1 === s2); // true

console.log(Symbol.keyFor(s1)); // "usuario"


//==============================
//SYMBOL COMO PROPRIEDADE OCULTA
//==============================

/*
Propriedades Symbol não aparecem em operações comuns como
Object.keys(), mas não são realmente privadas.

Qualquer código que tenha acesso ao objeto pode descobri-las
utilizando Object.getOwnPropertySymbols() ou Reflect.ownKeys().
*/

const senha = Symbol("senha");

const conta = {
    nome: "Vinícius",
    [senha]: "123456"
};

console.log(conta.senha); // undefined
console.log(conta[senha]); // "123456"


//==============================
//WELL-KNOWN SYMBOLS
//==============================

/*
Well-Known Symbols são Symbols nativos do JavaScript
que permitem personalizar o comportamento de objetos.

Symbol.iterator -> define como um objeto pode ser percorrido.
Symbol.toPrimitive -> define sua conversão para valores primitivos.
Symbol.toStringTag -> define a descrição utilizada pelo toString().
*/

// Symbol.iterator
const numeros = {
    valores: [10, 20, 30],

    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => ({
                value: this.valores[i++],
                done: i > this.valores.length
            })
        };
    }
};

for (const numero of numeros) {
    console.log(numero);
}

// Symbol.toStringTag
const objeto = {
    [Symbol.toStringTag]: "MeuObjeto"
};

console.log(Object.prototype.toString.call(objeto));
// [object MeuObjeto]