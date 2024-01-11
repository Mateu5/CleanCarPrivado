const nodemailer = require('nodemailer');
const { conexao } = require('../banco-de-dados/connection');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    },
    tls: {
        rejectUnauthorized: false // Desabilita a verificação do certificado SSL/TLS
    }
})

const resetSenha = async function (req, res) {

    const emailRec = req.body.email;

    [ resultado, meta ] = await conexao.query("select * from usuarios where email = :email", {
        replacements: {
            email: emailRec
        }
    });

    console.log(req.body.email);

    if(emailRec != null){
        console.log('entrou')
        const codigoRecuperacao = Math.floor(Math.random() * 1000000);

        [ resultado, meta ] = await conexao.query("UPDATE usuarios SET codigo_recuperacao = :codigo where email = :email", {
            replacements: {
                codigo: codigoRecuperacao,
                email: emailRec
            }
        });

        const mailOptions = {
            from: 'mateus.ieq32@gmail.com',
            to: emailRec,
            subject: 'Recuperação de Senha',
            text: `Seu código de recuperação de senha é: ${codigoRecuperacao}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log('Email enviado: ' + info.response);
            }
          });

          res.send('Um e-mail com o código de recuperação foi enviado para o seu endereço de e-mail.');
    }else{
        res.status(404).send('Email não encontrado');
    }
}

module.exports = {
    resetSenha: resetSenha,
}