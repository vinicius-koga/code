//@ts-nocheck

//===========================
//UNION TYPES E LITERAL TYPES
//===========================

/*
Union type (tipo união): o valor pode ser de um tipo OU de outro, separados por "|".
Literal type (tipo literal): o valor precisa ser exatamente um dos valores indicados.
A combinação dos dois permite criar conjuntos fechados de opções.
*/


//===========
//UNION TYPES
//===========

/*
A variável aceita qualquer um dos tipos listados.
*/

let id: string | number;

id = 10;
id = "abc";
// id = true;   // Erro: boolean não faz parte da união


//==========================
//UNIÃO COM null E undefined
//==========================

/*
Padrão frequente para representar valores que podem estar ausentes.
*/

let apelido: string | null = null;
let telefone: string | undefined;

apelido = "Vini";


//========================
//USANDO UM VALOR DE UNIÃO
//========================

/*
Em uma união, só é possível usar o que é comum a todos os tipos.
Para usar recursos específicos, é preciso estreitar o tipo (arquivo 12).
*/

function exibir(valor: string | number) {
    // valor.toUpperCase();   // Erro: não existe em number

    if (typeof valor === "string") {
        console.log(valor.toUpperCase());
    } else {
        console.log(valor.toFixed(2));
    }
}
