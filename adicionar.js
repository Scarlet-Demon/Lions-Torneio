const { listarFilmes } = require("./listar")

function adicionarSessao(exibirMenu){
    let nome = prompt('Qual o Nome da Sessão? ')
    let data = prompt('Qual a Data da Sessão? ')
    let horario = prompt('Qual o Horário da Sessão? ')
    let sala = prompt('Qual a Sala da Sessão? ')
    global.sessoes.push({ nome, data, horario, sala })
    exibirMenu()
}
module.exports = { adicionarSessao }
