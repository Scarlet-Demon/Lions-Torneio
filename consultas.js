const prompt = require('prompt-sync') ()

let consultas = []
exibirMenu()

function exibirMenu() {
    console.log(`
    Bem-Vindo, o seu Bem Estar é muito Importante para Nós!!!
    O que você precisa Hoje:
    1. Adicionar Nova Consulta
    2. Listar Consultas
    3. Atualizar Consulta
    4. Cancelar Consulta
    5. Sair`)

    rl.questions('Escolha uma Opção:  ', (opcao) => {
        switch (opcao) {
            case '1':
                adicionarConsulta()
                break;
            case '2':
                listarConsultas()
                break;
            case '3':
                atualizarConsultas()
                break;
            case '4':
                cancelarConsultas()
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
