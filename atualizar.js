function atualizarFilmes(callback) {
    let num = prompt('Digite o Número da Sessão que deseja Atualizar: ')
    const index = parseInt(num) - 1
    if (index < 0 || index >= global.sessoes.length) {
        console.log('Sessão Não Encontrada, Tente Novamente')
        atualizarFilmes(callback)
    } else {
        let nome = prompt('Digite o Novo Nome da Sessão: ');
        let data = prompt('Digite a Nova Data da Sessão: ');
        let hora = prompt('Digite o Novo Horário da Sessão: ');
        let sala = prompt('Digite a Nova Sala da Sessão: ');
        global.sessoes[index] = { nome, data, hora, sala }
        console.log('Sessão Atualizada com Sucesso!')
    }
    callback()
}
module.exports = { atualizarFilmes }
