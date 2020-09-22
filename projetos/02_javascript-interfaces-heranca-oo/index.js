import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor("Itallo", 10000, 555555555500);
diretor.cadastrarSenha("1234")

const gerente = new Gerente("Leticia", 5000, 444444444411);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Stella", 88888888822, "321");



const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "321");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado );