import { Cliente } from './Cliente.js'

export class ContaCorrente {
    static totalDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;


    constructor(cliente, agencia) {
        this._cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.totalDeContas++;
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    deposito(valor) {
        if (valor <= 0) {
            console.log('Deposito não permitido.')
            return;
        }
        console.log(`>>> deposito: R$ ${valor}`);
        this._saldo += valor;
    }


    saque(valor) {
        if (valor <= 0 || this._saldo < valor) {
            console.log('Saque negado.')
            return;
        }
        console.log(`>>> saque: R$ ${valor}`);
        this._saldo -= valor;
    }


    tranferencia(valor, conta) {
        if (valor <= 0 || this._saldo < valor) {
            console.log('Transferencia negada.')
            return;
        }
        console.log(`>>> transferencia: R$ ${valor}`);
        this._saldo -= valor;
        conta._saldo += valor;
    }
}