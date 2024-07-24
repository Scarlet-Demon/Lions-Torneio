function cancelarIngressos(callback) {
    if (global.sessoes.length == 0) {
        console.log('Não há Sessões a Serem Canceladas.')
        callback()
    } else {
        console.log('Lista de sessões: ')
        global.sessoes.forEach((sessao, index) => {
            console.log(`${index + 1}. ${sessao.nome}`)
        })
        let cancelar = prompt('Digite o Número da Sessão que Deseja Cancelar: ')
        const index = parseInt(cancelar) - 1
        if (index >= 0 && index < global.sessoes.length) {
            global.sessoes.splice(index, 1)
            console.log('Sessão Cancelada com Sucesso. Te Vejo na Próxima Vez :)')
        } else {
            console.log('Opção Inválida, digite novamente.')
            cancelarIngressos(callback)
        }
        callback()
    }
}

module.exports = { cancelarIngressos }
