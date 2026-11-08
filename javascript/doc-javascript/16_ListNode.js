//@ts-nocheck

//================
//LISTNODE
//================

/*
ListNode é uma estrutura utilizada para representar um nó de uma 
Lista Encadeada (Linked List).

Cada nó armazena:
- val -> o valor armazenado.
- next -> referência para o próximo nó.
*/

//========================
//CRIANDO UM LISTNODE
//========================

/*
Uma classe define a estrutura de cada nó.
O valor inicial de next é null, indicando que não existe
um próximo nó conectado.
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


//========================
//CRIANDO UMA LISTA
//========================

/*
Cada ListNode pode apontar para outro ListNode através de next.
Assim, criamos uma sequência de nós conectados.
*/

const node3 = new ListNode(30);
const node2 = new ListNode(20, node3);
const node1 = new ListNode(10, node2);


//========================
//ACESSANDO OS ELEMENTOS
//========================

/*
Para acessar um elemento, utilizamos next para avançar
de um nó para o próximo.
*/

console.log(node1.val);          // 10
console.log(node1.next.val);     // 20
console.log(node1.next.next.val); // 30


//========================
//PERCORRENDO A LISTA
//========================

/*
Podemos percorrer a lista utilizando um while.
A condição verifica se o nó atual existe.
*/

let current = node1;

while (current !== null) {
    console.log(current.val);
    current = current.next;
}


//========================
//ADICIONANDO UM ELEMENTO
//========================

/*
Para adicionar um nó ao final da lista, percorremos
os elementos até encontrar um nó cujo next seja null.
*/

const newNode = new ListNode(40);

current = node1;

while (current.next !== null) {
    current = current.next;
}

current.next = newNode;


//========================
//REMOVENDO UM ELEMENTO
//========================

/*
Para remover um nó, fazemos o nó anterior apontar
diretamente para o próximo nó do elemento removido.
*/

current = node1;

while (current.next !== null) {
    if (current.next.val === 20) {
        current.next = current.next.next;
        break;
    }

    current = current.next;
}