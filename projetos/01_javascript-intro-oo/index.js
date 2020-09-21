import { Cliente } from './Cliente.js'
import { ContaCorrente } from './contaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = "Itallo";
cliente1.cpf = 9995553334;

const conta1 = new ContaCorrente();
conta1.cliente = cliente1;
conta1.agencia = 1001;

// const conta2 = new ContaCorrente();
// conta2.cliente = new Cliente();
// conta2.cliente.nome = "Leticia";
// conta2.cliente.cpf = 1114447779;
// conta2.agencia = 2002;

conta1.depositar(100);
// conta1.transferir(50, conta2);

console.log(conta1.saldo);
// console.log(conta2);

