import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'
import { ContaSalario } from './ContaSalario.js';


const cliente1 = new Cliente("Itallo", 44455599900);
const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(1000, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaCorrente.depositar(1000);
contaCorrente.sacar(100);
contaPoupanca.sacar(100);
contaSalario.depositar(100);
contaSalario.sacar(10);



console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);