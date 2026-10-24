
//@ts-nocheck

//================
//COMPONENTE REACT
//================

/*
Um componente React é uma função que retorna elementos da interface (UI).
Por convenção, seu nome começa com letra maiúscula.
*/


//=====================
//CRIANDO UM COMPONENTE
//=====================

/*
O JSX retornado pela função define o que será exibido na tela.
*/

// arquivo -> App.tsx

function App() {
    return <h1>Olá, React!</h1>;
}


//=====================
//RETORNANDO VÁRIOS ELEMENTOS
//=====================

/*
Para retornar vários elementos, envolva-os em um elemento pai.
O Fragment (<>...</>) agrupa elementos sem criar uma tag HTML.
*/

function App() {
    return (
        <>
            <h1>Olá, React!</h1>
            <p>Meu primeiro componente.</p>
        </>
    );
}


//========================
//CRIANDO COMPONENTES FILHOS
//========================

/*
Um componente pode renderizar outros componentes.
Isso permite dividir a interface em partes reutilizáveis.
*/

// arquivo -> App.tsx

function Saudacao() {
    return <h1>Olá!</h1>;
}

function App() {
    return (
        <div>
            <Saudacao />
            <Saudacao />
        </div>
    );
}


//======================
//UTILIZANDO PROPS
//======================

/*
Props são informações recebidas por um componente.
Elas permitem reutilizá-lo com diferentes dados.
*/

// arquivo -> App.tsx

function Saudacao({ nome }) {
    return <h1>Olá, {nome}!</h1>;
}

function App() {
    return (
        <>
            <Saudacao nome="Vinícius" />
            <Saudacao nome="Maria" />
        </>
    );
}


//======================
//UTILIZANDO CHILDREN
//======================

/*
A prop children representa o conteúdo colocado entre
as tags de abertura e fechamento de um componente.
*/

function Card({ children }) {
    return <div className="card">{children}</div>;
}

function App() {
    return (
        <Card>
            <h2>Título</h2>
            <p>Conteúdo do cartão.</p>
        </Card>
    );
}


//=======================
//EXPORTANDO O COMPONENTE
//=======================

/*
export default permite exportar um componente como padrão
do arquivo, possibilitando sua importação em outro arquivo.
*/

// arquivo -> Saudacao.tsx

export default function Saudacao() {
    return <h1>Olá, React!</h1>;
}


//=======================
//IMPORTANDO O COMPONENTE
//=======================

/*
Importe o componente utilizando o caminho do arquivo.
*/

// arquivo -> App.tsx

import Saudacao from "./Saudacao";

function App() {
    return <Saudacao />;
}


//==========================
//REGRAS DOS COMPONENTES
//==========================

/*
- O nome do componente deve começar com letra maiúscula.
- Um componente deve retornar JSX válido.
- Utilize props para receber informações externas.
- Prefira componentes pequenos e reutilizáveis.
- Não chame um componente como uma função comum:
  utilize <Saudacao />, e não Saudacao().
*/