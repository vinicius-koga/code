//@ts-nocheck

//====================
//CONTROLANDO UM INPUT
//====================

/*
Um input controlado é um campo cujo valor é gerenciado pelo React.
Utilizamos useState() para armazenar e atualizar o valor do campo.
*/


//================
//CRIANDO O ESTADO
//================

/*
useState() retorna um array com dois elementos:
- inputValue: valor atual do estado.
- setInputValue: função utilizada para atualizar o estado.
*/

import { useState } from "react";

function App() {
    const [inputValue, setInputValue] = useState("");

    return <input />;
}


//========================
//VINCULANDO O VALOR AO INPUT
//========================

/*
A propriedade value define o valor exibido no campo.
O input passa a refletir o valor armazenado no estado.
*/

function App() {
    const [inputValue, setInputValue] = useState("");

    return (
        <input value={inputValue} />
    );
}


//=========================
//ATUALIZANDO O VALOR DO INPUT
//=========================

/*
O evento onChange é executado quando o valor do campo muda.
event.target.value contém o texto digitado pelo usuário.
setInputValue() atualiza o estado e provoca uma nova renderização.
*/

function App() {
    const [inputValue, setInputValue] = useState("");

    return (
        <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
        />
    );
}


//=========================
//UTILIZANDO O VALOR DO INPUT
//=========================

/*
Como o estado armazena o valor digitado, podemos utilizá-lo
em outros elementos da interface.
*/

function App() {
    const [inputValue, setInputValue] = useState("");

    return (
        <>
            <input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />

            <p>Você digitou: {inputValue}</p>
        </>
    );
}


//=======================
//EXPORTANDO O COMPONENTE
//=======================

export default App;


//=======================
//RENDERIZANDO O COMPONENTE
//=======================

// arquivo -> main.tsx

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);