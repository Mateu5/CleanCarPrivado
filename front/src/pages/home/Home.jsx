import {Link} from 'react-router-dom'
import React, { useState, useEffect } from "react"
//import { useHistory } from 'react-router-dom';
import '../../global.css'

import { Container, Row, Col, Form, InputGroup, FormControl, Button} from 'react-bootstrap';


function Home(){

    useEffect(() =>{
      const token = localStorage.getItem('token');

      if(!token){
        alert('token nao existe');
        window.location.href = "/login";
      }
    },[])

  
    return(
      <>
      
    {/* HOME */}

      <section>
      <div className="bg-dark text-secondary px-4 py-5 text-center" id="home">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Agende uma Lavagem</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/Agendar" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" >Agendar Agora</Link>
          </div>
        </div>
      </div>
    </div>
    </section>

    {/* SOBRE */}

    <section id="about" >
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div className="col-lg-6">
        <h1 className="display-5 text-body-emphasis lh-1 mb-3">Sobre nós</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
      <img id="about-img" src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
    </div>
  </div>
  </section>

  
  {/* CONTATO */}

  <section id="contact-us">
      <Container>
        <div className="page-title">
          <h1>Contact Us</h1>
        </div>
        <Row className="col-bg">
          <Col md={6}>
            <div>
              <p><i className="fa fa-map-marker" id="icon3"></i> Address: Winnipeg, Manitoba, Canada</p>
              <p><i className="fa fa-phone" id="icon3"></i> Phone: +01 111111</p>
              <p><i className="fa fa-envelope" id="icon3"></i> Email: service@dssoft.ca</p>
              <p>&nbsp;</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <p><a href="#" target="_blank"><i className="fa-brands fa-facebook-square" id="icon2"></i> Facebook</a></p>
              <p><a href="#" target="_blank"><i className="fa-brands fa-instagram" id="icon2"></i> Instagram</a></p>
              <p><a href="#" target="_blank"><i className="fa-brands fa-linkedin" id="icon2"></i> Linkedin</a></p>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact-form">
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Name " required id="contact-input" />
                  <Form.Control.Feedback type="invalid" >*Please, enter your name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <FormControl type="text" placeholder="Phone (55) 55 55555-5555" required id="contact-input" />
                  </InputGroup>
                  <Form.Control.Feedback type="invalid">*Please, enter your phone number</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="E-mail " required id="contact-input"/>
                  <Form.Control.Feedback type="invalid">*Please, enter your E-mail</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="textarea" rows={3} placeholder="Message" id="contact-input"/>
                </Form.Group>
                <Button variant="primary" type="submit" id ="send-btn">
                  Send message
                </Button>
                <div className="submit-feedback">Thank you for your message! We will contact you soon!</div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  
 

    </>
    
    
    
    

      

    )
    
}

export default Home