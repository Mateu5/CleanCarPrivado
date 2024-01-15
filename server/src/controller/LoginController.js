const { Usuario } = require('../banco-de-dados/connection');
const { Validator } = require('node-input-validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const config = require('../../config/app.js');
//const bcrypt = require('bcrypt');

const login = async function(requisicao, resposta){

    const validador = new Validator( requisicao.body, {
        email : 'required|email',
        senha : 'required'
    },{
        'senha.required' : 'o campo senha é obrigatorio',
        'email.required' : 'o campo email é obrigatorio'
    });

    let passou = await validador.check();

    if (!passou) {
        resposta.status(422).json( validador.errors);
        return;
    }

    let usuario = await Usuario.findOne({
        where : {
            email : requisicao.body.email
        }
    })

    if( usuario === null ) {
        return resposta.status(422).json({
            email: 'E-mail não cadastrado'
        })
    }

    let senha = requisicao.body.senha;

    //let senhaCorreta = await bcrypt.compare( senha, usuario.senha);

    //if(!senhaCorreta){
    if(senha =! usuario.senha){
        return resposta.status(422).json({
            senha : 'senha incorreta'
        })
    }

    const obj = {
        "sub" : usuario.senha,
        "id" : usuario.id
    }

    const token = jwt.sign(obj, config.jwt_secret, {expiresIn : '5h'});

    resposta.json( { token : token } );

    //resposta.json( usuario );
}

module.exports = {
    login
}