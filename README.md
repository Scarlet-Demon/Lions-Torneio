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
## adicionarSessao
## listarSessoes
## atualizarSessão
## cancelarIngresso
