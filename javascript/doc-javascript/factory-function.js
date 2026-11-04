//@ts-nocheck

//================
//FACTORY FUNCTIONS
//================

/*
Factory functions são funções que criam e retornam objetos.
São úteis para criar vários objetos com a mesma estrutura.
*/


//===========================
//CRIANDO UMA FACTORY FUNCTION
//===========================

/*
A função recebe parâmetros e retorna um objeto.
Cada chamada pode gerar um objeto com valores diferentes.
*/

function createUser(name, age) {
    return {
        name,
        age
    };
}

const user1 = createUser("Vinícius", 26);
const user2 = createUser("Ana", 22);


//==============================
//ADICIONANDO MÉTODOS AO OBJETO
//==============================

/*
Uma factory function também pode retornar objetos com métodos.
Os métodos podem acessar as propriedades do próprio objeto.
*/

function createUser(name, age) {
    return {
        name,
        age,
        introduce() {
            console.log(`Olá, sou ${name} e tenho ${age} anos.`);
        }
    }
}

const user = createUser("Vinícius", 26);

user.introduce();


//==========================
//ENCAPSULANDO DADOS (CLOSURE)
//==========================

/*
Variáveis declaradas dentro da factory function não ficam
diretamente acessíveis fora dela.

Os métodos retornados podem acessá-las por meio de closure.
*/

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment();
console.log(counter.getCount()); // 1


//=================
//GETTERS E SETTERS
//=================

/*
Getters permitem obter valores como se fossem propriedades.
Setters permitem modificar valores por meio de atribuição.

São úteis para controlar o acesso aos dados do objeto.
*/

function createProduct(name, price) {
    return {
        name,

        get price() {
            return price;
        },

        set price(newPrice) {
            if (newPrice > 0) {
                price = newPrice;
            }
        }
    };
}

const product = createProduct("Teclado", 150);

console.log(product.price); // 150

product.price = 200;        // Aciona o setter
console.log(product.price); // 200