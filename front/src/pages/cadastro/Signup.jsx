import React, { useState } from "react"
import {Link} from 'react-router-dom'
import '../../global.css'
import api from "../../../services/api"

function Signup(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cep, setCep] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

     const handlePasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };

    const handleLogin = async () => {
        try {
            
        if (password != passwordConfirm){
            alert("Senhas Diferentes");
            return;
        }

          let res = await api.post('/register', {
            name: username,
            email: email,
            cep: cep,
            senha: password,
          });
    
          if (res.status === 200) {
            console.log('Login bem-sucedido');
            alert('sucesso')
          }
        } catch (error) {
          console.error('Ocorreu um erro durante o login:', error.message);
        }
    };

    return(
        <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100'>
        <div className='form_container p-5 rounded bg-white w-20'>
            <form>
                <h3 className='text-center'>Bem-Vindo</h3>
                <div className='mb-2'>
                    <label htmlFor="nome" >Nome Completo</label>
                    <input type="text" placeholder='Digite o Nome Completo' className='form-control custom-input'
                    value={username} onChange={handleUsernameChange}
                    />        
                </div>
                <div className='mb-2'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" placeholder='Digite o E-mail' className='form-control custom-input'
                     value={email} onChange={handleEmailChange}
                    />        
                </div>
                <div className='mb-2'>
                    <label htmlFor="email" >Cep</label>
                    <input type="text" placeholder='00000-000' className='form-control custom-input'
                     value={cep} onChange={handleCepChange}
                    />        
                </div>
                <div className='mb-2'>
                    <label htmlFor="senha" >Senha</label>
                    <input type="password" placeholder='Digite a senha' className='form-control custom-input'
                     value={password} onChange={handlePasswordChange}
                    />        
                </div>
                <div className='mb-2'>
                    <label htmlFor="senhaConfirm" >Confirme a Senha</label>
                    <input type="password" placeholder='Confirme sua Senha' className='form-control custom-input'
                    value={passwordConfirm} onChange={handlePasswordConfirmChange}
                    />        
                </div>
                <br></br>
                <div className='d-grid mt-2'>
                    <button className='btn btn-primary' onClick={handleLogin}>Criar Conta</button>
                </div>
                <p className='text-end mt-2'>
                      Ja tem cadastro?<Link to="/login" className='ms-2'>Entrar</Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Signup