//@ts-nocheck

//================
// useReducer()
//================

/*
useReducer() é um Hook do React que gerencia estados utilizando
uma função reducer, que determina como o estado deve ser atualizado.

É útil quando o estado possui várias ações ou regras de atualização.
*/


//==========================
//UTILIZANDO useReducer()
//==========================

/*
useReducer(reducer, initialState) recebe:
- reducer -> função que determina como atualizar o estado.
- initialState -> valor inicial do estado.

Retorna:
- state -> estado atual.
- dispatch -> função que envia uma action para o reducer.
*/
// arquivo -> App.tsx

import { useReducer } from "react";

function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
			<button onClick={() => dispatch({ type: "decrement" })}>
                Decrementar
            </button>

            <h1>{state.count}</h1>

            <button onClick={() => dispatch({ type: "increment" })}>
                Incrementar
            </button>
        </>
    );
}


//======================
//CRIANDO UM REDUCER
//======================

/*
O reducer recebe o estado atual e uma action (ação) que vem dentro do dispatch().
Ele retorna o novo estado, sem modificar diretamente o anterior.

Por convenção, action possui uma propriedade type que identifica a ação.
*/

function reducer(state, action) {
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        default:
            return state;
    }
}


//===========================
//COMO O DISPATCH FUNCIONA
//===========================

/*
dispatch() envia uma action ao reducer.

Exemplo:
dispatch({ type: "increment" })

1. O React recebe a action.
2. O reducer recebe o estado atual e a action.
3. O reducer retorna o novo estado.
4. O React renderiza novamente o componente com o novo estado.

O estado não deve ser alterado diretamente dentro do reducer.
*/


//====================
// EXEMPLO COM PAYLOAD
//====================

/* 
É possível passar um payload (dado adicional) junto com a 
action do dispatch().
*/

import { useReducer } from "react";

type action = {
	type: 'increment' | 'decrement';
	payload: number
}

function App() {
    const [state, dispatch] = useReducer((state: number, action: action) => {
		switch (action.type) {
			case "increment":
				return state + action.payload;

			case "decrement":
				return state - action.payload;

			default:
				return state;
		}
	}, 0);

    return (
        <>
			<button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
                Decrementar -10
            </button>

			<button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
                Decrementar -1
            </button>

            <h1>{state}</h1>

            <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
                Incrementar +1
            </button>

			<button onClick={() => dispatch({ type: "increment", payload: 10 })}>
                Incrementar +10
            </button>
        </>
    );
}