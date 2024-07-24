const { listarFilmes } = require('./listar')
const { adicionarFilmes } = require('./adicionar')
const { atualizarFilmes } = require('./atualizar')
const { cancelarIngressos } = require('./cancelar')

function exibirMenu() {
    console.log('Bem-Vindo ao Cine Ilumination, Prepare a sua Pipoca e a Crinçada para se Divertirem em novas Aventuras, que os Aguarda!!!;\n 1. Adicionar nova Sessão;\n 2. Listar Todas as Sessões;\n 3. Atualizar uma Sessão Existente;\n 4. Cancelar uma Sessão;\n 5. Sair.')
    let opcao = prompt('Qual á sua Escolha de Hoje: ')
    switch (opcao) {
        case '1':
            adicionarFilmes(exibirMenu)
            break;
        case '2':
            listarFilmes(exibirMenu)
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
