//@ts-nocheck

//==================
//INTERSECTION TYPES
//==================

/*
Intersection type (tipo interseção): combina vários tipos em um só, usando "&".
O valor precisa satisfazer todos os tipos ao mesmo tempo, reunindo todas as suas propriedades.
(A união "|" significa "um OU outro"; a interseção "&" significa "um E outro".)
*/


//==========================
//COMBINANDO TIPOS DE OBJETO
//==========================

/*
O tipo resultante possui as propriedades de todos os tipos combinados.
*/

type Nome = { nome: string };
type Contato = { email: string; telefone: string };

type Cliente = Nome & Contato;

const cliente: Cliente = {
    nome: "Ana",
    email: "ana@exemplo.com",
    telefone: "11 99999-0000",
};

// const incompleto: Cliente = { nome: "Ana" };   // Erro: faltam email e telefone


//=============================
//COMBINANDO MAIS DE DOIS TIPOS
//=============================

/*
É possível encadear quantos tipos forem necessários.
*/

type ComId = { id: number };
type ComDatas = { criadoEm: Date; atualizadoEm: Date };
type ComAutor = { autor: string };

type Artigo = ComId & ComDatas & ComAutor & { titulo: string };


//===========================
//INTERSECTION COM INTERFACES
//===========================

/*
A interseção também funciona com interfaces.
*/

interface Animal { especie: string }
interface Domestico { dono: string }

type Cachorro = Animal & Domestico & { raca: string };

const rex: Cachorro = { especie: "Cão", dono: "Marina", raca: "Labrador" };


//=================
//CONFLITO DE TIPOS
//=================

/*
Se a mesma propriedade tem tipos incompatíveis, o resultado é never,
e o objeto se torna impossível de criar.
*/

type A = { valor: string };
type B = { valor: number };

type C = A & B;   // 'valor' passa a ser: string & number = never


//=========================
//REUTILIZANDO UM TIPO BASE
//=========================

/*
Padrão comum: acrescentar campos a um tipo existente sem alterá-lo.
Equivale, na prática, ao extends das interfaces.
*/

type Usuario = { nome: string; email: string };
type UsuarioComSenha = Usuario & { senha: string };
