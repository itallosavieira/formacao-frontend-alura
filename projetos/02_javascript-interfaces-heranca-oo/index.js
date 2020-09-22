import { Cliente } from './Cliente.js'
import { ContaCorrente } from './Conta/./ContaCorrente.js'
import { ContaPoupanca } from './Conta/./ContaPoupanca.js'
import { ContaSalario } from './Conta/./ContaSalario.js';

const cliente1 = new Cliente("Itallo", 44455599900);
const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(1000, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaCorrente.depositar(1000);
contaCorrente.sacar(100);
contaPoupanca.sacar(100);
contaSalario.depositar(1000);
contaSalario.sacar(100);

console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);