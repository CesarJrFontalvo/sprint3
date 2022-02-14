import React from 'react';
import { Button, Container, Form, FormControl, NavDropdown, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';
import '../index.css'

const NavbarBlock = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
  return (
    <Container  className="mt-3 sticky-top" >
            <Navbar  id="Navbar" variant="dark" expand="lg" >
        <Container fluid>
            <Navbar.Brand href="home">
                <img id="block-icon" src="https://res.cloudinary.com/difxvqjj3/image/upload/v1644873384/Proyecto2/blockmaster_Mesa_de_trabajo_1_vjpe0r.png"  alt="google button" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px' , color:'white'}}
                navbarScroll
            >
                <Nav.Link href="home">Todos</Nav.Link>
                <Nav.Link href="#action2">Más valoradas</Nav.Link>
                <Nav.Link href="#" >
                Menos valoradas
                </Nav.Link>
                <NavDropdown title="Registrar Peliculas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/registro-pelicula">Registrar pelicula en la lista</NavDropdown.Item>
                <NavDropdown.Item href="/registro-slider">Registrar pelicula en el Slider</NavDropdown.Item>
                </NavDropdown>
            </Nav>

            <Form className="d-flex ">
                <FormControl 
                type="search"
                placeholder="Busca tu pelicula "
                className="me-3"
                aria-label="Search"
                />
                <Button className="me-2" variant="warning">Buscar</Button>
                <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
            </Form>
            
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>  
  ) 
};

export default NavbarBlock;
