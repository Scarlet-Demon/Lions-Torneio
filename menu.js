const prompt = require('prompt-sync') ()
const {adicionarConsulta} = require('./adicionar')
const {listarConsultas} = require('./listar')
const {atualizarConsultas} = require('./atualizar')
const {cancelarConsultas} = require('./cancelar')

exibirMenu()

function exibirMenu() {
    console.log(`
    Bem-Vindo, selecione a opção desejada:
    1. Adicionar nova seção;
    2. Listar todas as seções;
    3. Atualizar uma seção existente;
    4. Cancelar uma seção;
    5. Sair.`)

    rl.questions('Escolha uma Opção:  ', (opcao) => {
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
                rl.close()
                break;
            default:
                console.log('Opção inválida, tente novamente.')
				exibirMenu()
                break;
        }
    })
};

module.exports = {exibirMenu}