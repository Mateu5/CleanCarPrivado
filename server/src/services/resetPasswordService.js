const nodemailer = require('nodemailer');
const { conexao } = require('../banco-de-dados/connection');

//cria um servico de transporte
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mateus.ieq32@gmail.com',
        pass: 'tlzf paiw bpkd vpde'
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
        /*console.log('entrou')
        //cria um código de verificação aleatório com o Math do javaScript (precisa mudar a maneira de gerar o código)
        const codigoRecuperacao = Math.floor(Math.random() * 1000000);
        //da um UPDATE no banco com o Código de verificação (futuramente precisa criar uma table propia no banco)
        [ resultado, meta ] = await conexao.query("UPDATE usuarios SET codigo_recuperacao = :codigo where email = :email", {
            replacements: {
                codigo: codigoRecuperacao,
                email: emailRec
            }
        });*/
        
        const mailOptions = {
            from: 'mateus.ieq32@gmail.com',//remetente
            to: emailRec,//quem vai receber o código
            subject: 'Recuperação de Senha',
            text: `link para recuperar senha: http://localhost:5173/esqueciSenha`
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

const conferenceCode = async function (req, res) {
    const code = req.body.code;
    const emailRec = req.body.email;

    [ codeData, meta ] = await conexao.query("SELECT codigo_recuperacao FROM usuarios where email = :email", {
        replacements: {
            email: emailRec,
        }
    })
    
    const codeDB = codeData[0].codigo_recuperacao
    console.log(codeDB)
    console.log(code);

    try {
        if( code == codeDB ){
            console.log("recuperação bem sucedida");
        }else{
            console.log("não conseguiu");
        }
    } catch (error) {
        console.log(err)
    }   
}


module.exports = {
    resetSenha: resetSenha,
    conferenceCode: conferenceCode,
}