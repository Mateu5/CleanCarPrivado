const nodemailer = require('nodemailer');
const { conexao } = require('../banco-de-dados/connection');

//cria um servico de tranporte
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
//funcao para reset da senha
const resetSenha = async function (req, res) {

    //recebe o email do front(json)
    const emailRec = req.body.email;
    //verifica se o email esta no banco de dados 
    [ resultado, meta ] = await conexao.query("select * from usuarios where email = :email", {
        replacements: {
            //substitui o :email pelo email que foi recebido do front
            email: emailRec
        }
    });

    console.log(emailRec);
    //verica se o email não é nulo antes de gerar o código de verificação
    if(emailRec != null){
        console.log('entrou')
        //cria um código de verificação aleatório com o Math do javaScript (precisa mudar a maneira de gerar o código)
        const codigoRecuperacao = Math.floor(Math.random() * 1000000);
        //da um UPDATE no banco com o Código de verificação (futuramente precisa criar uma table propia no banco)
        [ resultado, meta ] = await conexao.query("UPDATE usuarios SET codigo_recuperacao = :codigo where email = :email", {
            replacements: {
                codigo: codigoRecuperacao,
                email: emailRec
            }
        });
        
        const mailOptions = {
            from: 'mateus.ieq32@gmail.com',//remetente
            to: emailRec,//quem vai receber o código
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