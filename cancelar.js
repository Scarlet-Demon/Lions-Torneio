function cancelarConsultas(callback){
    if (jogador.length == 0) {
        console.log('Não há seções a remover.')
        callback()
    } else {
            console.log('Lista de seções:')
            consultas.forEach((consulta, index) => {
                console.log(`${index + 1}. ${consulta.nome}`)
            })
            let remover = prompt('Digite o jogador que deseja remover: ')
                if(remover > 0 && remover<= consultas.length) {
                    consultas.splice (remover -1, 1)
                    console.log('Jogador removido com sucesso!')
                    callback()
                }else {
                    console.log('Opção Inválida, digite novamente.')
                    callback()
                }
    }
}
module.exports = {cancelarConsultas}
