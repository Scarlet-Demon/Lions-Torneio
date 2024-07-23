const prompt = require('prompt-sync')()
const {exibirMenu} = require('./menu')

let consultas = []

global.prompt = prompt
global.consultas = consultas

exibirMenu()