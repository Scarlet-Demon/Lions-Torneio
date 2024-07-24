const { listarSessoes } = require('./listar')
const { adicionarSessao } = require('./adicionar')
const { atualizarSessao } = require('./atualizar')
const { cancelarIngressos } = require('./cancelar')

function exibirMenu() {
    console.log('Bem-Vindo ao Cine Ilumination, Prepare a sua Pipoca e a Crinçada para se Divertirem em novas Aventuras, que os Aguarda!!!;\n 1. Adicionar nova Sessão;\n 2. Listar Todas as Sessões;\n 3. Atualizar uma Sessão Existente;\n 4. Cancelar uma Sessão;\n 5. Sair.')
    let opcao = prompt('Qual á sua Escolha de Hoje: ')
    switch (opcao) {
        case '1':
            adicionarSessao(exibirMenu)
            break;
        case '2':
            listarSessoes()
            exibirMenu()
            break;
        case '3':
            atualizarSessao(exibirMenu)
            break;
        case '4':
            cancelarIngressos(exibirMenu)
            break;
        case '5':
            console.log(`Eaí se divertiu Amiguinho(a)?, É uma pena que você está indo embora, mais isso não é um Adeus, e sim um Até Logo, pois o Mundo é Cheio de Aventuras, que está sempre buscando um novo Protagonista. Espero que um dia ele seja Você e que eu possa contar á sua História. Até logo Amiguinho(a), te vejo por ai em meio às Histórias do Mundo.`)
            return
            break;
        default:
            console.log('Opção inválida, tente novamente.')
            exibirMenu()
            break;
    }
}

module.exports = {exibirMenu}
