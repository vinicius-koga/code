//@ts-nocheck

//===============
//FUNÇÕES TIPADAS
//===============

/*
Em funções, o TS permite tipar os parâmetros e o valor de retorno.
Os parâmetros sempre precisam de tipo; o retorno pode ser inferido, mas anotá-lo é uma boa prática.
*/


//====================
//PARÂMETROS E RETORNO
//====================

/*
Sintaxe: function nome(parametro: tipo): tipoDoRetorno
*/

function somar(a: number, b: number): number {
    return a + b;
}

somar(2, 3);
// somar("2", 3);   // Erro: argumento do tipo string
// somar(2);        // Erro: faltou um argumento


//===============
//ARROW FUNCTIONS
//===============

/*
Arrow function é a sintaxe curta de função, com "=>". Segue as mesmas regras de tipagem.
*/

const subtrair = (a: number, b: number): number => a - b;

const saudar = (nome: string): string => `Olá, ${nome}!`;


//====================
//PARÂMETROS OPCIONAIS
//====================

/*
O símbolo "?" torna o parâmetro opcional. Dentro da função, seu tipo inclui undefined.
Parâmetros opcionais devem ficar após os obrigatórios.
*/

function cumprimentar(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `Olá, ${nome} ${sobrenome}!`;
    }
    return `Olá, ${nome}!`;
}

cumprimentar("Ana");
cumprimentar("Ana", "Silva");


//===========================
//PARÂMETROS COM VALOR PADRÃO
//===========================

/*
O valor padrão é usado quando o argumento não é informado. O tipo é inferido do valor padrão.
*/

function potencia(base: number, expoente = 2): number {
    return base ** expoente;
}

potencia(3);      // 9
potencia(3, 3);   // 27


//===============
//PARÂMETROS REST
//===============

/*
O parâmetro rest (...) agrupa os argumentos restantes em um array.
Deve ser o último parâmetro e ser tipado como array.
*/

function somarTodos(...numeros: number[]): number {
    return numeros.reduce((acc, n) => acc + n, 0);
}

somarTodos(1, 2, 3, 4);   // 10


//============
//RETORNO void
//============

/*
Funções que não retornam valor utilizam void.
*/

function exibirMensagem(texto: string): void {
    console.log(texto);
}


//==============
//TIPO DE FUNÇÃO
//==============

/*
Descreve a assinatura de uma função, útil para variáveis e parâmetros que recebem funções.
Uma função passada como argumento para outra é chamada de callback.
*/

type Transformacao = (valor: number) => number;

function aplicar(valor: number, fn: Transformacao): number {
    return fn(valor);
}

aplicar(5, (n) => n * 2);   // 10
aplicar(5, (n) => n + 1);   // 6


//======================
//OBJETOS COMO PARÂMETRO
//======================

/*
Objetos podem ser recebidos com desestruturação, tipando o conjunto de propriedades.
*/

function exibirUsuario({ nome, idade }: { nome: string; idade: number }): string {
    return `${nome} tem ${idade} anos`;
}

exibirUsuario({ nome: "Ana", idade: 30 });


//=====================
//SOBRECARGA DE FUNÇÕES
//=====================

/*
A sobrecarga (overload) declara várias assinaturas para uma mesma função,
relacionando tipos de entrada a tipos de saída. A última definição é a implementação real.
Seu uso é menos frequente; uniões costumam bastar.
*/

function converter(valor: string): number;
function converter(valor: number): string;
function converter(valor: string | number): string | number {
    if (typeof valor === "string") {
        return Number(valor);
    }
    return String(valor);
}

const n = converter("10");   // number
const s = converter(10);     // string
