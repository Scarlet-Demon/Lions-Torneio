const {adicionarConsulta} = require('./adicionar')
const {listarConsultas} = require('./listar')
const {atualizarConsultas} = require('./atualizar')
const {cancelarConsultas} = require('./cancelar')

function exibirMenu() {
    console.log('Bem-Vindo;\n 1. Adicionar nova seção;\n 2. Listar todas as seções;\n 3. Atualizar uma seção existente;\n 4. Cancelar uma seção;\n 5. Sair.')
    let opcao = prompt('Qual a a opção desejada?')
        switch (opcao) {
            case '1':
                adicionarConsulta(exibirMenu)
                break;
            case '2':
                listarConsultas(exibirMenu)
                break;
            case '3':
                atualizarConsultas(exibirMenu)
                break;
            case '4':
                cancelarConsultas(exibirMenu)
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