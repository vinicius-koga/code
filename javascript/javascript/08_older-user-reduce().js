const users = [
    { nome: "Vinícius", idade: 26 },
    { nome: "Ana", idade: 22 },
    { nome: "Carlos", idade: 31 },
    { nome: "Mariana", idade: 19 },
    { nome: "Lucas", idade: 25 },
    { nome: "Beatriz", idade: 28 },
    { nome: "Gabriel", idade: 23 },
    { nome: "Larissa", idade: 21 },
    { nome: "Pedro", idade: 35 },
    { nome: "Juliana", idade: 27 }
];

/*
Quando .reduce() não recebe valor inicial, o valor inicial (acc)
passa a ser o indice[0] e (value) passa a ser o indice[1].
*/
const olderUser = users.reduce((acc, value) => {
	/*
	a cada iteração o valor retornado passa para acc
	e value vira o próximo valor da iteração.
	*/
	return acc.idade > value.idade ? acc : value;
})

console.log(olderUser);