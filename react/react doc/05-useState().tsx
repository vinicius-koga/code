
//@ts-nocheck

//===============
//ESTADO NO REACT
//===============

/*
O estado (state) armazena dados que podem mudar durante a execução
do componente. Quando o estado muda, o React atualiza a interface.
*/


//=================
//CRIANDO UM ESTADO
//=================

/*
useState() é um Hook que cria um estado e retorna um array com:
- O valor atual do estado.
- A função que atualiza esse valor.

A desestruturação permite obter os dois valores separadamente.
*/

import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return <p>Contador: {count}</p>;
}


//====================
//ATUALIZANDO O ESTADO
//====================

/*
setCount() solicita a atualização do estado.
O React renderiza novamente o componente com o novo valor.
Não altere o estado diretamente.
*/

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Contador: {count}</p>
            <button onClick={(e) => setCount(10)}>
                Definir como 10
            </button>
        </>
    );
}


//==================
//CRIANDO UM HANDLER
//==================

/*
Um handler é uma função que trata um evento, como um clique.
Podemos passar sua referência ao evento sem executá-la durante
a renderização.
*/

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement(e) {
        setCount(count + 1);
    }

    return (
        <button onClick={handleIncrement}>
            Contador: {count}
        </button>
    );
}


//============================
//ATUALIZANDO COM UM PARÂMETRO
//============================

/*
Podemos passar uma função para setCount().
O React fornece o estado atual como parâmetro.
Essa forma é recomendada quando o novo estado depende do anterior.
*/

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((currentState) => currentState <= 10 ? currentState + 1 : currentState);
    }

    return (
        <button onClick={handleIncrement}>
            Contar até 10: {count}
        </button>
    );
}


//=====================
//ATUALIZANDO UM OBJETO
//=====================

/*
Para mudar o estado de um objeto é necessário
abrir um corpo arrow function.

Para alterar objetos ou arrays normalmente criamos
um novo com spread operator (...)
*/

function App() {
    const [object, setObject] = useState(0);

    function handleIncrement() {
        setObject((currentState) => {
			return {
				...currentState,
				// alterações
			}
		});
    }

    return (
        <button onClick={handleIncrement}>
            Alterar Objeto: {object}
        </button>
    );
}


//========================
//ATUALIZANDO VÁRIAS VEZES
//========================

/*
Quando várias atualizações dependem do estado anterior,
utilize a função como parâmetro para calcular cada novo valor.
*/

function App() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <button onClick={handleIncrement}>
            Contador: {count}
        </button>
    );
}