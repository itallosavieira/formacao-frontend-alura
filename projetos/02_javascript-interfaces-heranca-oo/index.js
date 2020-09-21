import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'

/* ########## CLIENTE 1 ########## */
const cliente1 = new Cliente("Itallo", 44455599900);
const conta1 = new ContaCorrente(cliente1, 1001);

/* ########## CLIENTE 2 ########## */
const cliente2 = new Cliente("Leticia", 99988866677);
const conta2 = new ContaCorrente(cliente2, 2002);

conta1.deposito(1000.50);
conta1.tranferencia(500.50, conta2);
conta2.saque(200.25);

console.log(conta1)
console.log(conta2)
console.log(ContaCorrente)


