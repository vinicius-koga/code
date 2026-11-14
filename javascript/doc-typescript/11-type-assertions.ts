//@ts-nocheck

//================
//TYPE ASSERTIONS
//================

/*
Type Assertion (asserção de tipo) permite informar ao TypeScript
que um valor deve ser tratado como um determinado tipo.

Não altera o valor em tempo de execução, apenas informa o tipo ao compilador.
*/


//=========================
//SINTAXE COM AS
//=========================

/*
as -> palavra-chave utilizada para indicar o tipo desejado.
*/

const valor = "Olá, TypeScript!" as string;


//==============================
//SINTAXE COM ANGULAR BRACKETS
//==============================

/*
Também podemos utilizar <Tipo> para fazer uma asserção.
Essa sintaxe não funciona em arquivos TSX, pois pode ser confundida com JSX.
*/

const numero = <number>10;


//==========================
//ASSERTION COM ELEMENTOS DOM
//==========================

/*
O TypeScript não sabe exatamente qual elemento será retornado
por getElementById(), portanto, retorna o tipo HTMLElement | null.

Podemos utilizar as para informar o tipo específico do elemento.
*/

const input = document.getElementById("nome") as HTMLInputElement;

input.value = "Vinícius";


//==========================
//ASSERTION COM UNION TYPES
//==========================

/*
Podemos utilizar as para informar ao TypeScript
qual tipo de uma Union Type estamos utilizando.

Entretanto, a asserção não realiza nenhuma validação.
*/

type Resposta = string | number;

const resposta = "Sucesso" as Resposta;


//==========================
//ASSERTION COM UNKNOWN
//==========================

/*
unknown -> representa um valor cujo tipo ainda é desconhecido.

Diferentemente de any, exige uma verificação ou asserção
antes de permitir operações específicas daquele tipo.
*/

const dado: unknown = "Olá!";

const texto = dado as string;

console.log(texto.toUpperCase());


//==========================
//DOUBLE ASSERTION
//==========================

/*
Quando dois tipos não possuem compatibilidade suficiente,
podemos utilizar unknown como intermediário.

Essa prática deve ser evitada quando existir uma alternativa segura.
*/

const valorNumerico = "123" as unknown as number;


//==========================
//TYPE ASSERTION VS TYPE CASTING
//==========================

/*
Type Assertion -> informa ao TypeScript como tratar um valor.
Type Casting -> converte efetivamente um valor para outro tipo.

Type Assertion não realiza conversões em tempo de execução.
*/

const idade = "26" as unknown as number; // Continua sendo string.

const idadeConvertida = Number("26"); // Converte para number.