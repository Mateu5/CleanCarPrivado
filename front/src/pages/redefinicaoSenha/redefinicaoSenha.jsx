import React, { useState } from "react"
import {Link} from 'react-router-dom'
import '../../global.css'




function redefinicaoSenha(){
    return(
<div className='signup template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container p-5 rounded bg-white w-20'>
            <form className="text-center">
            <h3 className='text-center'>Recuperação de senha</h3>
            <p className='text-center'>Redefina sua nova senha nos campos abaaixos</p>
            <div className="input-group flex-nowrap mt-5">
            <input type="password" className="form-control" placeholder="Nova senha animal" aria-label="Username" aria-describedby="addon-wrapping" minlength="8" required></input>
            </div>
            <div className="input-group flex-nowrap mt-4">
            <input type="password" className="form-control" placeholder="Repita sua senha animal" aria-label="Username" aria-describedby="addon-wrapping" minlength="8" required></input>
            </div>
            <button className='btn btn-primary mb-5 mt-5 '>Redefinir</button>
            <ul className="nav justify-content-center border-bottom"></ul>
            </form>
                <p className='text-end mt-2'>
                         <Link to="/login">Voltar</Link> <Link to="/signup" className='ms-2'>Criar outra conta</Link>
                </p>
        </div>
</div>
    )
}

export default redefinicaoSenha