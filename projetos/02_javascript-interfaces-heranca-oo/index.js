import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'

/* ########## CLIENTE 1 ########## */
const cliente1 = new Cliente("Itallo", 44455599900);
const contaCorrente = new ContaCorrente(cliente1, 1001);
const contaPoupanca = new ContaPoupanca(1000, cliente1, 1001);

contaCorrente.depositar(1000);
contaCorrente.sacar(100);
contaPoupanca.sacar(100);


console.log(contaCorrente, contaPoupanca);
