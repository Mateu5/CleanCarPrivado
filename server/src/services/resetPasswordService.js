let con = require('../../banco-de-dados/conexao');
const { Sequelize, Op } = require('sequelize');
const { DateTime } = require('luxon');
const { RecoverCode } = require('../models/password_recover_code');

const resetPasswordService = async(code, email, password) => {

    try{
        const { RecoverCode } = require('../models/password_recover_code');
        const { Op } = require('sequelize');

        const codeExists = await RecoverCode.findOne({
            where: {
                code: code,
                email: email,
            }
        });

        if(codeExists === null ){
            throw new Error('o código informado é invalido ou expirou.');
        }

        let result = await con.query("sp_atualiza_senha :email, :senha", {
            replacements: {
                email: email,
                senha: password
            },
            type: Sequelize.QueryTypes.UPDATE
        });
        }catch (error) {
            throw error;
        }
}

module.exports = {
    resetPasswordService
}