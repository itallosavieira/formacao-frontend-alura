import {Cliente} from './cliente.js'
import {ContaCorrente} from './contaCorrente.js'

const cliente1 = new Cliente();
cliente1.nome = "Itallo";
cliente1.cpf = 44455566658;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88855566658;

const contaCorrenteItallo = new ContaCorrente();
contaCorrenteItallo.agencia = 1001;

contaCorrenteItallo.depositar(200);
contaCorrenteItallo.sacar(50);


console.log(contaCorrenteItallo);
