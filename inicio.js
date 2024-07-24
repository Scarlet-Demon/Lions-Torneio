const prompt = require('prompt-sync')()
const {exibirMenu} = require('./menu')

let sessoes = []

global.prompt = prompt
global.sessoes = sessoes

exibirMenu()
