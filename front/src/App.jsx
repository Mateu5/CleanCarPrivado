import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/login/Login'
import Signup from './pages/cadastro/Signup'
import Home from './pages/home/home'
import Agendar from './pages/agendar/Agendar'
import Navbar from "./pages/navbar/navbar"
import Footer from "./pages/footer/footer"
import EsqueciSenha from "./pages/esqueciSenha/esqueciSenha"
import RedefinicaoSenha from "./pages/redefinicaoSenha/redefinicaoSenha"




//Para navegar entre as páginas de uma aplicação React.JS precisaremos 
//criar rotas, onde cada rota vai representar uma tela.
function App() {

  return (
   <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Agendar' element={<Agendar />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
          <Route path='/esqueciSenha' element={<EsqueciSenha />}></Route>
          <Route path='/redefinicaoSenha' element={<RedefinicaoSenha />}></Route>

      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App
