
const { conexao } = require('../banco-de-dados/connection');

const listarCliente = async function( requisicao, resposta ){

    try{

        [ resultado, meta ] = await conexao.query("select * from Cliente", {
        } );

        console.log( resultado );
        console.log( meta );

        resposta.status(200).json( resultado );

    }catch(erro){
        console.log(erro);

        resposta.status(500).json(erro);
    }

}

module.exports = {
    listarCliente: listarCliente
}