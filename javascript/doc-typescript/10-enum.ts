//@ts-nocheck

//================
//ENUM EM TYPESCRIPT
//================

/*
enum (enumeration) -> define um conjunto de valores nomeados.
É utilizado quando uma variável deve assumir um conjunto específico de opções.
*/


//================
//CRIANDO UM ENUM
//================

/*
enum -> palavra-chave utilizada para declarar uma enumeração.
Por padrão, enums numéricos começam em 0 e incrementam automaticamente.
*/

enum Status {
    Pendente,  // 0
    Aprovado,  // 1
    Rejeitado  // 2
}

let pedido: Status = Status.Pendente;


//======================
//ENUM COM VALORES EXPLÍCITOS
//======================

/*
Podemos definir manualmente os valores de cada membro.
Os valores numéricos podem começar em qualquer número.
*/

enum Status {
    Pendente = 1,
    Aprovado = 2,
    Rejeitado = 3
}


//================
//ENUM DE STRINGS
//================

/*
Cada membro recebe um valor textual explícito.
É necessário definir o valor de cada membro.
*/

enum Cor {
    Vermelho = "VERMELHO",
    Verde = "VERDE",
    Azul = "AZUL"
}

let cor: Cor = Cor.Vermelho;


//================
//ENUM HETEROGÊNEO
//================

/*
Um enum pode misturar valores numéricos e textuais.
Entretanto, essa prática geralmente não é recomendada.
*/

enum Resposta {
    Sim = 1,
    Nao = "NÃO"
}


//==========================
//ACESSANDO VALORES DO ENUM
//==========================

/*
Podemos acessar os membros utilizando o nome do enum.
*/

enum Dia {
    Segunda = 1,
    Terca = 2,
    Quarta = 3
}

console.log(Dia.Segunda); // 1
console.log(Dia.Terca);   // 2


//==========================
//ENUM COM VALORES CALCULADOS
//==========================

/*
Membros numéricos podem receber expressões constantes.
*/

enum Permissao {
    Leitura = 1,
    Escrita = 2,
    LeituraEscrita = Leitura | Escrita
}


//==========================
//ENUM E REVERSE MAPPING
//==========================

/*
Em enums numéricos, podemos acessar o nome pelo valor.
Esse comportamento é chamado de reverse mapping.
Enums de strings não possuem esse recurso.
*/

enum Nivel {
    Baixo = 1,
    Medio = 2,
    Alto = 3
}

console.log(Nivel.Baixo); // 1
console.log(Nivel[1]);    // "Baixo"


//==========================
//ENUM CONST
//==========================

/*
const enum -> permite que os valores sejam substituídos diretamente
durante a compilação, evitando a criação do objeto enum em runtime.

Runtime -> momento em que o código está sendo executado.
*/

const enum Tamanho {
    Pequeno = "P",
    Medio = "M",
    Grande = "G"
}

let camiseta: Tamanho = Tamanho.Medio;