import { Cliente } from './Cliente.js'
import { ContaCorrente } from './contaCorrente.js'

const cliente1 = new Cliente("Itallo", 9995553334);
const conta1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Leticia", 1114447779);
const conta2 = new ContaCorrente(2002, cliente2);

conta1.depositar(100);
conta1.transferir(50, conta2);

console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);