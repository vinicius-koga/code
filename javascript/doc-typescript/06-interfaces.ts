//@ts-nocheck

//==========
//INTERFACES
//==========

/*
Uma interface descreve o formato (contrato) de um objeto.
É declarada com a palavra-chave "interface" e, para objetos, é muito semelhante ao type alias.
*/


//========================
//DECLARANDO UMA INTERFACE
//========================

/*
A interface lista as propriedades e seus tipos. Não leva o sinal de igual (=) usado no type.
*/

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const caneta: Produto = { id: 1, nome: "Caneta", preco: 3.5 };


//========================================
//PROPRIEDADES OPCIONAIS E SOMENTE LEITURA
//========================================

/*
Valem as mesmas regras dos objetos tipados: "?" para opcional e readonly para somente leitura.
*/

interface Pedido {
    readonly codigo: string;
    observacao?: string;
}

const pedido: Pedido = { codigo: "A-001" };
// pedido.codigo = "B-002";   // Erro


//=====================
//MÉTODOS EM INTERFACES
//=====================

/*
Funções podem ser descritas como propriedades da interface.
*/

interface Calculadora {
    somar(a: number, b: number): number;
    subtrair: (a: number, b: number) => number;
}

const calc: Calculadora = {
    somar: (a, b) => a + b,
    subtrair: (a, b) => a - b,
};


//===================
//HERANÇA COM extends
//===================

/*
Uma interface pode estender outra, herdando suas propriedades e acrescentando novas.
É possível estender várias interfaces ao mesmo tempo, separando-as por vírgula.
*/

interface Pessoa {
    nome: string;
    idade: number;
}

interface Estudante extends Pessoa {
    curso: string;
}

interface Bolsista extends Estudante {
    valorBolsa: number;
}

const aluno: Estudante = { nome: "Ana", idade: 20, curso: "Computação" };

interface Identificavel { id: number }
interface Auditavel { criadoEm: Date }
interface Registro extends Identificavel, Auditavel { descricao: string }


//====================
//FUSÃO DE DECLARAÇÕES
//====================

/*
Declarar uma interface com o mesmo nome duas vezes combina as declarações em uma só
(declaration merging). Esse recurso é usado para ampliar tipos de bibliotecas.
*/

interface Configuracao { tema: string }
interface Configuracao { idioma: string }

const conf: Configuracao = { tema: "escuro", idioma: "pt-BR" };


//==================
//interface OU type?
//==================

/*
Diferenças principais:
- interface: aceita fusão de declarações e usa extends para herdar. Indicada para objetos e classes.
- type: aceita uniões, tuplas e tipos primitivos nomeados, o que a interface não faz.

Regra prática: utilizar interface para descrever objetos e type para os demais casos.
Em projetos existentes, seguir o padrão já adotado pela equipe.
*/

type Resposta = string | number;     // só é possível com type
// interface Resposta2 = string | number;   // Erro de sintaxe
