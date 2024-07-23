function cancelarConsultas(){
    if (jogador.length == 0) {
        console.log('Não há seções a remover.')
        exibirMenu()
    } else {
            console.log('Lista de seções:')
            consultas.forEach((consulta, index) => {
                console.log(`${index + 1}. ${consulta.nome}`)
            })
            let remover = prompt('Digite o jogador que deseja remover: ')
                if(remover > 0 && remover<= consultas.length) {
                    consultas.splice (remover -1, 1)
                    console.log('Jogador removido com sucesso!')
                    exibirMenu()
                }else {
                    console.log('Opção Inválida, digite novamente.')
                    exibirMenu()
                }
    }
}
module.exports = {cancelarConsultas}