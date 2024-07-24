# É os Guri da Computação
## Introdução 
Criamos o nosso código no processo `prompt` como solicitado pelo nosso Professor, como o processo `prompt` é parecido com o processo `readline`, como sempre declarmos a função criando primeiro a Bibliopteca do nossa Código sobre `Sessão de Filme`. Em seguida criamos uma variavel com o nome de `Sessões` para armazenar as informações que seram adicionadas no terminal conforme o pedido do Usuário, depois disso tranformamos o espaço dessa variavel e o comando prompt em espaços globais para facilitar os envios de informações. 
```Javascript
const prompt = require('prompt-sync') ()
const {exibirMenu} = require('./menu')

let sessoes = []

global.prompt = prompt
global.prompt = sessoes
```
Como sempre nas outras linhas de códigos criamos um `Menu` para fácil compreenção do usuário em relação ao código, criamos um `Switch` para a navegação das funções criadas para cada um das opções do Menu sendo elas: 
`adicionarSessao`
`listarSessoes`
`atualizarSessão`
`cancelarIngresso`
As opções do Menu era essas: 
`Adicionar nova Sessão`
`Listar Todas as Sessões`
`Atualizar uma Sessão`
`Cancelar uma Sessão`
`Sair`

## Desenvolvimento
Como dito anteiormente, Criemos `Funções`, para o compreendimento do código que ao escolher uma opção do Menu ele deverá executar ela de acordo com essa escolha (é nesse caso que entra o `Switch`).

## Função Adicionar
Como diz o nome da função, ela `adicionar` uma Sessão no `Banco de Dados` do código (prompt), dentro desta função será feito perguntas iram salva as respectivas informações: 
`O nome da Sessão`
`A data da Sessão`
`O horário da Sessão`
`A sala da Sessão`
```javascript
function adicionarSessao(callback){
    if(sessoes == 0){
        console.log('Não ha Sessões Disponiveis!')
        callback()
    }else{
        let nome = prompt('Qual o Nome da Sessão? ')
        let data = prompt('Qual a Data da Sessão? ')
        let horario = prompt('Qual o Horário da Sessão? ')
        let sala = prompt('Qual a Sala da Sessão? ')
        global.sessoes.push({ nome, data, horario, sala })
        callback()
    }
```
## Função Listar
Como o próprio nome diz, está função `Lista` ás Sessões que já foram salvas no Bando de Dados do código(prompt)
```javascript
function listarSessoes(callback) {
    console.log("=======================================================")
    global.sessoes.forEach((sessao, index) => {
        console.log(`
            ${index + 1}.
            |nome: ${sessao.nome}| \n
            |data: ${sessao.data}| \n
            |hora: ${sessao.hora}| \n
            |sala: ${sessao.sala}|`)
        console.log("=======================================================")
    });
    callback()
```
## Função Atualizar
Como o próprio nome diz, está função `Atualiza` ás Sessões que já foram criadas pela `Função Adicionar` e refaz novas perguntas para o usuário, adicionando novas informações no código e depois fazendo as alterações no Banco de Dados (prompt), no qual o usuário pode escolher qual Sessão ele deseja atualizar.
```javascript
function atualizarSessao(callback) {
    let num = prompt('Digite o Número da Sessão que deseja Atualizar: ')
    const index = parseInt(num) - 1
    if (index < 0 || index >= global.sessoes.length) {
        console.log('Sessão Não Encontrada, Tente Novamente')
        atualizarSessao(callback)
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
```
## Função Cancelar
Como o diz o nome, está função `Cancela` ou `Remove` ás Sessões que foram criadas pela `Função Adicionar` do Banco de Dados (prompt), no qual o usuário pode escolher qual Sessão ele deseja cancelar ou remover.
```javascript
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
```
## Conclusão
Em suma, este código é baseado nas quatro operações básicas do desenvolvimento de uma aplicação, sendo elas Create (criar), Read (ler), Update (atualizar) e Delete (apagar). Tanto este código quanto outros já feitos podem ser restruturados para encaixarem-se na suas exigencias para levar a um novo resultado.
