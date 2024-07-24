function listarFilmes(callback){

        console.log("=======================================================")
       
    consultas.forEach((consultas,index)=> {
        console.log(`
            ${index + 1}.
         |nome: ${consultas.nome[i]}| \n
         |data: ${consultas.data[i]}| \n
         |hora: ${consultas.hora[i]}| \n
         |sala: ${consultas.sala[i]}|`)  
       
         console.log("=======================================================")
    });
   
}
module.exports = {listarFilmes}
