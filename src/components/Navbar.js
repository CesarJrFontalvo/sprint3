import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/actionLogin';

const NavbarBlock = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }
  return (
    <Container  className="mt-3" >
            <Navbar bg="dark" variant="dark" expand="md" >
        <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                
                className="me-auto my-2 my-lg-1"
                style={{ maxHeight: '100px' , color:'white'}}
                navbarScroll
            >
                <Nav.Link href="#action1">Todos</Nav.Link>
                <Nav.Link href="#action2">Más valoradas</Nav.Link>
              
                <Nav.Link href="#" >
                Menos valoradas
                </Nav.Link>
            </Nav>

            <Form className="d-flex ">
                <FormControl 
                type="search"
                placeholder="Busca tu pelicula "
                className="me-3"
                aria-label="Search"
                />
                <Button className="me-2" variant="warning">Buscar</Button>
            </Form>
            <Button variant="danger" onClick={() => handleLogout()}>Logout</Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>  
  ) 
};

export default NavbarBlock;
