import React, { useState } from "react"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function navbar(){
    return(
        <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="light" variant="light"> {/* Use o 'bg' e 'variant' para definir o estilo */}
      <Container fluid className="nav-container"> {/* Use 'fluid' para ocupar toda a largura */}
        <Navbar.Brand href="/home">Clean Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto gap-4 ">
            <Nav.Link href="/agendar">Agendar</Nav.Link>
            <Nav.Link href="/sobre">Sobre Nós</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={profileIcon} id="basic-nav-dropdown"  drop="start" >
              <NavDropdown.Item href="/perfil">Meu Perfil</NavDropdown.Item>
              <NavDropdown.Item href="/configuracoesPerfil">Configurações</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/login">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    )
}
const profileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    fill="currentColor"
    className="bi bi-person-fill"
    viewBox="0 0 16 16"
  >
    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  </svg>
);

export default navbar