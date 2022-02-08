import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const NavbarBlock = () => {
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
                <Button variant="warning">Buscar</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Container>  
  ) 
};

export default NavbarBlock;
