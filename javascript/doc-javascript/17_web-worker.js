//@ts-nocheck

//================
//WEB WORKER
//================

/*
Um Web Worker permite executar códigos JavaScript em uma thread separada
da thread principal, evitando bloquear a interface da página.

O Worker executa seu próprio arquivo JavaScript, independentemente
do código principal.
*/


//=======================
//CRIANDO UM WEB WORKER
//=======================

/*
O construtor new Worker() cria uma instância de um Worker.

O caminho informado indica o arquivo JavaScript que será executado.
Ao criar a instância, o Worker começa a executar seu arquivo.
*/
// arquivo -> main.js

const worker = new Worker("./worker.js");


//=======================
//EXECUTANDO UM WORKER
//=======================

/*
O Worker pode executar códigos automaticamente, assim que é criado,
sem precisar receber uma mensagem.
*/
// arquivo -> worker.js

let sum = 0;
for (let i = 0; i <= 10_000_000; i++) {
    sum += i;
}


//=========================
//ENVIANDO UMA MENSAGEM
//=========================

/*
O postMessage() envia dados da thread principal para o Worker.

No Worker, o evento onmessage recebe esses dados.
*/
// arquivo -> main.js

worker.postMessage("Iniciar cálculo!");

// arquivo -> worker.js

self.onmessage = function(message) {
	// ...
    console.log(message.data);
};

// Aqui ele executa apenas ao receber uma mensagem.


//=============================
//RESPONDENDO A UMA MENSAGEM
//=============================

/*
O self.postMessage() envia dados do Worker para a thread principal.

O evento onmessage, na thread principal, recebe a resposta.
*/
// arquivo -> worker.js

self.postMessage(sum);

// arquivo -> main.js

worker.onmessage = function(message) {
    console.log(message.data);
};


//==========================
//CRIANDO UM WORKER NO CLICK
//==========================

/*
O Worker também pode ser criado dentro de um evento.

Assim, sua execução começa somente quando o botão é clicado.
*/
// arquivo -> main.js

const btnCalc = document.querySelector(".btn-calc");

btnCalc.addEventListener("click", () => {
    const worker = new Worker("./worker.js");

    worker.onmessage = function(message) {
        console.log(message.data);
        worker.terminate();
    };
});


//==========================
//ENCERRANDO UM WEB WORKER
//==========================

/*
terminate() encerra o Worker imediatamente, sem permitir
que ele finalize sua execução atual.

Também é possível encerrar o próprio Worker utilizando self.close().
*/
// arquivo -> main.js

worker.terminate();

// arquivo -> worker.js

self.close();