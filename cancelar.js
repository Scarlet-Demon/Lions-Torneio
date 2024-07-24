function cancelarIngressos(callback){
    if (sessoe.length == 0) {
        console.log('Não há Ingressos a Serem Cancelados.')
        callback()
    } else {
            console.log('Lista de sessões: ')
            consultas.forEach((sessoes, index) => {
                console.log(`${index + 1}. ${sessoes.nome}`)
            })
            let cancelar = prompt('Digite o Ingresso que Deseja Cancelar: ')
                if(cancelar > 0 && cancelar <= sessoes.length) {
                    sessoes.splice (cancelar -1, 1)
                    console.log('Ingresso Cancelado. Te Vejo na Proxima Vez :)')
                    callback()
                }else {
                    console.log('Opção Inválida, digite novamente.')
                    cancelarIngressos(Callback)
                }
    }
}
module.exports = {cancelarIngressos}
