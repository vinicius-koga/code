//@ts-nocheck

//====================
//FETCH, ASYNC E AWAIT
//====================

/*
fetch() -> faz requisições HTTP para obter ou enviar dados.
async -> permite que uma função utilize await e retorna uma Promise.
await -> espera uma Promise ser resolvida antes de continuar a execução.
Promise -> representa um resultado que estará disponível no futuro.
*/


//======================
//FAZENDO UMA REQUISIÇÃO
//======================

/*
O fetch() retorna uma Promise com a resposta do servidor.
response.json() converte o corpo da resposta em um objeto JavaScript.
*/

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => console.log(data));


//======================
//UTILIZANDO ASYNC/AWAIT
//======================

/*
async permite utilizar await dentro da função.
await espera cada Promise ser resolvida, facilitando a leitura do código.
*/

async function buscarUsuario() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    console.log(data);
}

buscarUsuario();


//==============
//TRATANDO ERROS
//==============

/*
fetch() não rejeita a Promise automaticamente em respostas HTTP como 404.
response.ok verifica se o status HTTP indica sucesso.
try/catch captura erros de rede e erros lançados com throw.
*/

async function buscarUsuario() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Falha na requisição:", error);
    }
}

buscarUsuario();
