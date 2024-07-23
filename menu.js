const {adicionarFilmes} = require('./adicionar')
const {listarFilmes} = require('./listar')
const {atualizarFilmes} = require('./atualizar')
const {cancelarIngressos} = require('./cancelar')

function exibirMenu() {
    console.log('Bem-Vindo ao Cinema Iluminations; Qual a sua Escolha: ;\n 1. Adicionar nova Sessão;\n 2. Listar todas as Sessões;\n 3. Atualizar uma Sessão Existente;\n 4. Cancelar uma Sessão;\n 5. Sair.')
    let opcao = prompt('Qual a a opção desejada?')
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
                cancelarFilmes(exibirMenu)
                break;
            case '5':
                return
                break;
            default:
                console.log('Opção inválida, tente novamente.')
				exibirMenu()
                break;
        }
};

module.exports = {exibirMenu}
