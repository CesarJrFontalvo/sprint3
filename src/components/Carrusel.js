import React, { useEffect } from 'react';
import {  Carousel, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listCarruselAsync } from '../actions/actionRegistroCarrusel';


const Carrusel = () => {
  const dispatch = useDispatch();

    
    
    const { listaCarrusel } = useSelector(store => store.carrusel);
    console.log(listaCarrusel)
    
    useEffect(() => {
        dispatch(listCarruselAsync())
     }, [])


  return (
    <Container className="mt-3 mb-4">
      <Row className="justify-content-md-center">
        <Col className="col-md-7">
          <Carousel >
           { 
            listaCarrusel.map((e, i) => (
            <Carousel.Item key={i}>
              <img
                  className=" w-100 "
                src={e.url}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))
            }

          </Carousel>
        </Col>
      </Row>
    </Container>
     
    

  );

};

export default Carrusel;
