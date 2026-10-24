//@ts-nocheck

//=====================================
//TYPESCRIPT: INTRODUÇÃO E CONFIGURAÇÃO
//=====================================

/*
TypeScript (TS) é um superset do JavaScript (JS): todo código JS válido também é TS válido,
e o TS acrescenta um sistema de tipos. Os tipos são verificados durante o desenvolvimento
e removidos na compilação. Navegadores e Node.js não executam TS diretamente;
o código é convertido em JS por um compilador.
*/


//=======================
//INSTALANDO O TYPESCRIPT
//=======================

/*
O npm (Node Package Manager) é o gerenciador de pacotes do Node.js.
O comando abaixo instala o tsc (TypeScript Compiler), o compilador do TS.
O parâmetro -D instala o pacote como dependência de desenvolvimento,
ou seja, usado apenas durante a construção do projeto.
*/

// npm install -D typescript
// npx tsc --version


//==========================
//CRIANDO O PRIMEIRO ARQUIVO
//==========================

/*
Arquivos TypeScript utilizam a extensão .ts (ou .tsx quando contêm JSX, como no React).
A anotação ": string" define que a variável só aceita texto.
*/
// arquivo -> index.ts

const mensagem: string = "Olá, TypeScript!";
console.log(mensagem);


//====================
//COMPILANDO O ARQUIVO
//====================

/*
O tsc converte o arquivo .ts em um arquivo .js, que pode ser executado pelo Node.js.
*/

// tsc index.ts     -> gera o arquivo index.js
// node index.js    -> executa o arquivo gerado


//=======================
//O ARQUIVO tsconfig.json
//=======================

/*
O tsconfig.json concentra as configurações do compilador. O JSON (JavaScript Object Notation)
é um formato de texto para representar dados. O comando "npx tsc --init" cria o arquivo.

Exemplo de tsconfig.json:

{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src"]
}

target  -> versão do JS que será gerada.
module  -> sistema de módulos utilizado (import/export).
strict  -> ativa as verificações de tipo mais rigorosas.
outDir  -> pasta de saída dos arquivos .js.
rootDir -> pasta dos arquivos .ts originais.
include -> pastas que o compilador deve analisar.
*/


//===========
//MODO STRICT
//===========

/*
A opção "strict": true ativa um conjunto de verificações, entre elas:
- noImplicitAny: proíbe variáveis e parâmetros sem tipo definido que seriam tratados como any.
- strictNullChecks: impede atribuir null ou undefined a tipos que não os aceitam.
Recomenda-se manter o modo strict ativo em todos os projetos.
*/

function dobrar(valor) {          // Erro com strict: parâmetro 'valor' implicitamente do tipo 'any'
    return valor * 2;
}

function dobrarSeguro(valor: number) {
    return valor * 2;
}


//================
//DETECTANDO ERROS
//================

/*
A principal vantagem do TS é apontar erros antes da execução do programa.
*/

let idade: number = 25;

// idade = "vinte e cinco";   // Erro: Type 'string' is not assignable to type 'number'.
idade = 26;                   // Correto
