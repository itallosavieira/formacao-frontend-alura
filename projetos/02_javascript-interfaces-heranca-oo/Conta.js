export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
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


    depositar(valor) {
        if (valor <= 0) {
            console.log('Deposito não permitido.')
            return;
        }
        this._saldo += valor;
    }


    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa) {
        const valorSacado = valor * taxa;
        if (valorSacado <= 0 || this._saldo < valorSacado) {
            console.log('Saque negado.')
            return;
        }
        this._saldo -= valorSacado;
        return valorSacado;
    }


    transferir(valor, conta) {
        if (valor <= 0 || this._saldo < valor) {
            console.log('Transferencia negada.')
            return;
        }
        this._saldo -= valor;
        conta._saldo += valor;
    }
}