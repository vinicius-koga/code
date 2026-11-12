function Conta(agencia, conta, saldo) {
	this.agencia = agencia;
	this.conta = conta;
	this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
	if (this.saldo < valor) return;
	this.saldo -= valor;
}
Conta.prototype.depositar = function(valor) {
	this.saldo += valor
}
Conta.prototype.verSaldo = function() {
	console.log(this.saldo);
}

const c1 = new Conta(1010, 2020, 1000);

c1.sacar(500);

console.log(c1)