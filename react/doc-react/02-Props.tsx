//@ts-nocheck

//================
//PROPS NO REACT
//================

/*
Props (properties) são informações passadas de um componente
pai para um componente filho.

Elas permitem reutilizar componentes com diferentes dados.
*/


//====================
//PASSANDO PROPS
//====================

/*
As props são informadas como atributos na utilização
do componente e recebidas como argumento da função.
*/

// arquivo -> App.tsx

function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
}

function App() {
    return <Saudacao nome="Vinícius" />;
}


//==========================
//DESESTRUTURANDO AS PROPS
//==========================

/*
A desestruturação permite acessar as propriedades diretamente,
sem precisar escrever props.nome, props.idade, etc.
*/

function Usuario({ nome, idade }) {
    return <p>{nome} tem {idade} anos.</p>;
}

function App() {
    return <Usuario nome="Vinícius" idade={26} />;
}


//==========================
//TIPOS DE VALORES NAS PROPS
//==========================

/*
As props podem receber strings, números, booleanos,
variáveis, objetos, arrays e funções.

Strings -> nome="Maria"
Números -> idade={26}
Booleanos -> ativo={true}
Variáveis -> nome={nomeUsuario}
*/

function App() {
    const nomeUsuario = "Maria";

    return (
        <>
            <Usuario nome={nomeUsuario} idade={30} />
            <Botao ativo={true} />
        </>
    );
}

function Usuario({ nome, idade }) {
    return <p>{nome}, {idade} anos.</p>;
}

function Botao({ ativo }) {
    return <button disabled={!ativo}>Enviar</button>;
}


//==========================
//PROPS COM VALORES PADRÃO
//==========================

/*
Podemos definir um valor padrão caso a prop seja omitida
ou receba undefined.
*/

function Saudacao({ nome = "Visitante" }) {
    return <h1>Olá, {nome}!</h1>;
}

function App() {
    return (
        <>
            <Saudacao />
            <Saudacao nome="Vinícius" />
        </>
    );
}


//==========================
//PROPS COM CHILDREN
//==========================

/*
A prop children recebe o conteúdo colocado entre as tags
de abertura e fechamento do componente.
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


//==========================
//PROPS COM TYPESCRIPT
//==========================

/*
Uma interface define quais propriedades o componente recebe
e os tipos de valores permitidos.
*/

// arquivo -> Usuario.tsx

interface UsuarioProps {
    nome: string;
    idade: number;
}

function Usuario({ nome, idade }: UsuarioProps) {
    return <p>{nome}, {idade} anos.</p>;
}


//==========================
//REGRAS DAS PROPS
//==========================

/*
- As props são recebidas do componente pai.
- As props são somente leitura: não devem ser alteradas pelo filho.
- Para modificar dados, utilize o estado ou funções recebidas por props.
- O TypeScript permite definir e verificar os tipos das props.
*/