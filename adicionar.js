const { listarConsultas } = require("./listar")

function adicionarConsulta(callback){
    /*listarConsultas()*/
    if(consultas==0){
        console.log('Não ha seções disponiveis!')
        callback()
    }else{
        let nome = prompt('Qual o nome da seção?')
        let data = prompt('Qual a data da seção?')
        let horario = prompt('Qual o horário da seção?')
        let sala = prompt('Qual a sala da seção?')
        consultas.push({nome,data,horario,sala})
        callback()
    }
}
module.exports = {adicionarConsulta}