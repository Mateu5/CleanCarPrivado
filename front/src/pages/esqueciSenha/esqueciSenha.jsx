import React, { useState } from "react"
import {Link} from 'react-router-dom'
import '../../global.css'



function esqueciSenha(){
    return(
        
<div className='signup template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container p-5 rounded bg-white w-20'>
            <form className="text-center">
            <h3 className='text-center'>Recuperação de senha</h3>
            <p className='text-center'>Informe seu endereço de email que nós enviaremos um link para alteração da senha</p>
            <div className="input-group flex-nowrap mt-5">
            <span className="input-group-text" id="addon-wrapping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
            </svg></span>
            <input type="text" className="form-control" placeholder="Digite seu Email Animal" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
            <button className='btn btn-primary mb-5 mt-5 '>Enviar</button>
            <ul className="nav justify-content-center border-bottom"></ul>
            </form>
                <p className='text-end mt-2'>
                         <Link to="/login">Voltar</Link> <Link to="/signup" className='ms-2'>Criar outra conta</Link>
                </p>
        </div>
   
</div>

  
    )
}

export default esqueciSenha