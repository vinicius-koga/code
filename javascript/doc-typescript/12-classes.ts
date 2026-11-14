//@ts-nocheck

//================
//CLASSES TYPESCRIPT
//================

/*
Uma classe é um modelo (blueprint) utilizado para criar objetos.
Ela reúne atributos (dados) e métodos (comportamentos).

O TypeScript adiciona recursos de tipagem e modificadores de acesso
que não existem nativamente nas classes do JavaScript.
*/


//================
//CRIANDO UMA CLASSE
//================

/*
class -> declara uma classe.
constructor() -> método executado automaticamente ao instanciar a classe.
new -> cria uma instância da classe.

Diferentemente do JavaScript, o TypeScript permite tipar atributos
e parâmetros diretamente na declaração da classe.
*/

class Usuario {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const usuario = new Usuario("Vinícius", 26);


//================
//MODIFICADORES DE ACESSO
//================

/*
public -> acessível de qualquer lugar. É o padrão.
private -> acessível somente dentro da própria classe.
protected -> acessível dentro da classe e de suas subclasses.

Esses modificadores são recursos do TypeScript.
*/

class Conta {
    public titular: string;
    private saldo: number;
    protected agencia: number;

    constructor(titular: string, saldo: number, agencia: number) {
        this.titular = titular;
        this.saldo = saldo;
        this.agencia = agencia;
    }

    consultarSaldo() {
        return this.saldo;
    }
}

const conta = new Conta("Vinícius", 1000, 1010);

console.log(conta.titular);       // OK
console.log(conta.consultarSaldo()); // OK
// console.log(conta.saldo);      // Erro: private


//================
//READONLY
//================

/*
readonly -> permite atribuir um valor ao atributo somente na declaração
ou dentro do constructor. Depois disso, ele não pode ser alterado.

É um recurso do TypeScript.
*/

class Produto {
    readonly id: number;
    nome: string;

    constructor(id: number, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}

const produto = new Produto(1, "Notebook");

produto.nome = "Mouse"; // OK
// produto.id = 2;       // Erro: readonly


//================
//PARAMETER PROPERTIES
//================

/*
O TypeScript permite declarar e inicializar atributos diretamente
pelos parâmetros do constructor utilizando modificadores de acesso.

Isso evita precisar declarar os atributos separadamente.
*/

class Pessoa {
    constructor(
        public nome: string,
        private idade: number,
        readonly id: number
    ) {}

    apresentar() {
        return `${this.nome}, ${this.idade} anos.`;
    }
}

const pessoa = new Pessoa("Vinícius", 26, 1);


//================
//GETTERS E SETTERS
//================

/*
get -> permite acessar um método como se fosse um atributo.
set -> permite atribuir um valor utilizando uma propriedade.

São utilizados para controlar o acesso aos atributos.
*/

class Temperatura {
    private _celsius: number = 0;

    get celsius() {
        return this._celsius;
    }

    set celsius(valor: number) {
        if (valor < -273.15) return;
        this._celsius = valor;
    }
}

const temperatura = new Temperatura();

temperatura.celsius = 25;
console.log(temperatura.celsius);


//================
//HERANÇA
//================

/*
extends -> permite que uma classe herde atributos e métodos de outra.
super() -> chama o constructor da classe pai.

Uma subclasse pode adicionar novos atributos e sobrescrever métodos.
*/

class Animal {
    constructor(public nome: string) {}

    emitirSom() {
        console.log("Som do animal");
    }
}

class Cachorro extends Animal {
    constructor(nome: string, public raca: string) {
        super(nome);
    }

    emitirSom() {
        console.log("Au au!");
    }
}

const cachorro = new Cachorro("Rex", "Labrador");

cachorro.emitirSom();


//================
//ABSTRAÇÃO
//================

/*
abstract -> impede que uma classe seja instanciada diretamente.
Métodos abstratos devem ser implementados pelas subclasses.

É um recurso do TypeScript.
*/

abstract class Veiculo {
    constructor(public marca: string) {}

    abstract acelerar(): void;

    parar() {
        console.log("Veículo parado");
    }
}

class Carro extends Veiculo {
    acelerar() {
        console.log("Carro acelerando");
    }
}

const carro = new Carro("Toyota");
// const veiculo = new Veiculo("Ford"); // Erro: classe abstrata


//================
//POLIMORFISMO
//================

/*
Polimorfismo permite que diferentes classes implementem
um mesmo método de maneiras diferentes.

Uma referência do tipo da classe pai pode receber
instâncias de suas subclasses.
*/

class Gato extends Animal {
    emitirSom() {
        console.log("Miau!");
    }
}

const animais: Animal[] = [
    new Cachorro("Rex", "Labrador"),
    new Gato("Mimi")
];

animais.forEach(animal => animal.emitirSom());


//================
//STATIC
//================

/*
static -> declara atributos e métodos pertencentes à própria classe,
não às suas instâncias.

Podem ser acessados diretamente pelo nome da classe.
*/

class Matematica {
    static PI = 3.14159;

    static somar(a: number, b: number) {
        return a + b;
    }
}

console.log(Matematica.PI);
console.log(Matematica.somar(10, 20));


//================
//IMPLEMENTS
//================

/*
implements -> obriga uma classe a implementar a estrutura
definida por uma interface.

A interface funciona como um contrato, exigindo atributos e métodos.
É um recurso de tipagem do TypeScript.
*/

interface Autenticavel {
    email: string;
    autenticar(): boolean;
}

class UsuarioAdmin implements Autenticavel {
    constructor(public email: string) {}

    autenticar() {
        return true;
    }
}


//================
//CLASSES COMO TIPOS
//================

/*
Uma classe também pode ser utilizada como tipo no TypeScript.

Uma variável desse tipo deve possuir a estrutura compatível
com a instância da classe.
*/

class Cliente {
    constructor(
        public nome: string,
        public idade: number
    ) {}
}

const cliente: Cliente = new Cliente("Vinícius", 26);


//================
//EXPORTANDO A CLASSE
//================

/*
export -> permite utilizar a classe em outros arquivos.
export default -> exporta a classe como padrão do arquivo.
*/

export default Usuario;


//================
//IMPORTANDO A CLASSE
//================

/*
import -> importa a classe utilizando o caminho do arquivo.
*/

import Usuario from "./Usuario";

const novoUsuario = new Usuario("Maria", 30);