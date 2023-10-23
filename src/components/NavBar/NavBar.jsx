import React from 'react';
import './NavBar.css';
import CardWidget from "../CardWidget/CardWidget"
import logo from './assets/logo.png'
import { Navbar, Nav, NavDropdown, Container, Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
<Navbar expand="lg" className="nav-color">
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt='logo' className='img-nav'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink}  to='/' className='nav-link'>Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink}  to='/categoria/plantas' className='drop-item'>Plantas</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink}  to='/categoria/macetas' className='drop-item'>Macetas</NavDropdown.Item>
              <NavDropdown.Item  as={NavLink}  to='/categoria/accesorios' className='drop-item'>Accesorios</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  as={NavLink}  to='/contacto' className='nav-link'>Contacto</Nav.Link>
          </Nav>
          <Form inline>
            <div className="d-flex align-items-center">
              <Col className='barra'>
                <Form.Control
                  type="text"
                  placeholder="Macetas color rosa"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className='boton-buscar'>Buscar</Button>
              </Col>
              <Col xs="auto">
                <CardWidget/>
              </Col>
            </div>
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;