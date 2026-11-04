//@ts-nocheck

//================
//HOOK useEffect()
//================

/*
O useEffect() é um Hook do React que permite executar efeitos
colaterais, como buscar dados, utilizar timers ou sincronizar
o componente com sistemas externos.
*/


//=================
//CRIANDO UM EFEITO
//=================

/*
O useEffect() recebe uma função que será executada após
o React renderizar o componente.
*/

// arquivo -> App.tsx

import { useEffect } from "react";

function App() {
    useEffect(() => {
        console.log("Componente renderizado");
    });

    return <h1>Olá, React!</h1>;
}


//=====================
//ARRAY DE DEPENDÊNCIAS
//=====================

/*
O segundo argumento define quando o efeito será executado.

Sem array -> executa após cada renderização.
Array vazio [] -> executa após a montagem inicial.
[variavel] -> executa na montagem e quando a variável mudar.
*/

function App() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Contador:", contador);
    }, [contador]);

    return (
        <button onClick={() => setContador(contador + 1)}>
            {contador}
        </button>
    );
}


//=========================
//EXECUTANDO APENAS UMA VEZ
//=========================

/*
Com um array de dependências vazio, o efeito não depende
de variáveis reativas e é executado na montagem do componente.

No StrictMode, durante o desenvolvimento, o React pode
executar o efeito duas vezes para verificar sua implementação.
*/

function App() {
    useEffect(() => {
        console.log("Aplicação iniciada");
    }, []);

    return <h1>Olá, React!</h1>;
}


//=================
//FUNÇÃO DE LIMPEZA
//=================

/*
O efeito pode retornar uma função de limpeza (cleanup).

Ela é executada antes de o efeito ser repetido e quando
o componente é desmontado.
*/

function App() {
    useEffect(() => {
        const intervalo = setInterval(() => {
            console.log("Executando...");
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);

    return <h1>Timer</h1>;
}


//=====================
//REGRAS DO useEffect()
//=====================

/*
- Importe o Hook de "react".
- Chame-o no nível superior do componente.
- Informe as dependências utilizadas pelo efeito.
- Evite utilizar useEffect() para cálculos que podem ser
  feitos diretamente durante a renderização.
- Utilize a função de limpeza para desfazer efeitos quando necessário.
*/