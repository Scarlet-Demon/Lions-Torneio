const { listarFilmes } = require('./listar')
const { adicionarFilmes } = require('./adicionar')
const { atualizarFilmes } = require('./atualizar')
const { cancelarIngressos } = require('./cancelar')

function exibirMenu() {
    console.log('Bem-Vindo ao Cine Ilumination;\n 1. Listar todas as Sessões;\n 2. Adicionar nova Sessão;\n 3. Atualizar uma Sessão Existente;\n 4. Cancelar uma Sessão;\n 5. Sair.')
    let opcao = prompt('Qual a opção desejada?')
    switch (opcao) {
        case '1':
            listarFilmes(exibirMenu)
            break;
        case '2':
            adicionarFilmes(exibirMenu)
            break;
        case '3':
            atualizarFilmes(exibirMenu)
            break;
        case '4':
            cancelarIngressos(exibirMenu)
            break;
        case '5':
            return
            break;
        default:
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
            break;
    }
}

module.exports = {exibirMenu}
