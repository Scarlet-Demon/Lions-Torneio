function atualizarFilmes(callback){
    let num = prompt('Digite o Número da Sessão que deseja Atualizar: ')
    const index = parseInt(num) - 1
    if (index < 0 || index >= sessoes.length) {
        console.log('Sessão Não Encontarda, Tente Novamente')
        atualizarFilmes(callback)
    } else {
        let nome = prompt('Digite o Novo Nome do Filme: ');
        let data = prompt('Digite o Nova Data: ');
        let hora = prompt('Digite o Nova Hora: ');
        let sala = prompt('Digite o Nova Sala: ');
        sessoes[index] = {nome, data, hora, sala}
        console.log('Sessão Atualizada com Sucesso!')
    }
    callback()
}
module.exports = {atualizarConsultas}
