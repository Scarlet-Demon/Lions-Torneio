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
}
module.exports = { listarSessoes }
