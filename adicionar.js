const { listarFilmes } = require("./listar")

function adicionarFilmes(callback){
    /*listarFilmes()*/
    if(sessoes == 0){
        console.log('Não ha Sessões Disponiveis!')
        callback()
    }else{
        let nome = prompt('Qual o Nome da Sessão? ')
        let data = prompt('Qual a Data da Sessão? ')
        let horario = prompt('Qual o Horário da Sessão? ')
        let sala = prompt('Qual a Sala da Sessão? ')
        sessoes.push({nome,data,horario,sala})
        callback()
    }
}
module.exports = {adicionarFilmes}
