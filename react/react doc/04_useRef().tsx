//@ts-nocheck

//================
//HOOK useRef()
//================

/*
O useRef() permite armazenar um valor que persiste entre renderizações.
Também pode ser utilizado para acessar diretamente elementos do DOM.

Diferentemente do useState(), alterar uma ref não provoca uma nova renderização.
*/


//==================
//CRIANDO UMA REFERÊNCIA
//==================

/*
useRef() retorna um objeto com a propriedade current.
Inicialmente, podemos defini-la como null.
*/

import { useRef } from "react";

function App() {
    const inputRef = useRef(null);

    return <input ref={inputRef} />;
}


//=======================
//ACESSANDO O DOM COM REF
//=======================

/*
A propriedade ref conecta a referência ao elemento DOM.
Após a renderização, inputRef.current contém o elemento HTML.
*/

function App() {
    const inputRef = useRef(null);

    function focusInput() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>
                Focar no input
            </button>
        </>
    );
}


//==========================
//ARMAZENANDO VALORES COM REF
//==========================

/*
O valor de current pode ser alterado sem provocar uma renderização.
A referência permanece entre as renderizações do componente.
*/

function App() {
    const countRef = useRef(0);

    function increment() {
        countRef.current++;
        console.log(countRef.current);
    }

    return <button onClick={increment}>Incrementar</button>;
}


//=======================
//TIPANDO UMA REFERÊNCIA
//=======================

/*
Em TypeScript, podemos informar o tipo do elemento DOM.
HTMLInputElement representa um elemento <input>.
*/

function App() {
    const inputRef = useRef<HTMLInputElement>(null);

    return <input ref={inputRef} />;
}


//=======================
//IMPORTANDO E UTILIZANDO
//=======================

/*
O componente pode ser importado e renderizado normalmente.
O useRef() deve ser chamado dentro de um componente React ou de um Hook.
*/

// arquivo -> main.tsx

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);