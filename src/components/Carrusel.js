import React, { useEffect } from 'react';
import {  Carousel, Col, Container, Row } from 'react-bootstrap';
import {  useDispatch, useSelector } from 'react-redux';
import { listCarruselAsync } from '../actions/actionRegistroCarrusel';
// import ReactPlayer  from 'react-player';

const Carrusel = () => {
  const dispatch = useDispatch();

    
    
    const { listaCarrusel } = useSelector(store => store.carrusel);
    
    
    useEffect(() => {
        dispatch(listCarruselAsync())
     }, [dispatch])


  return (
    <Container className="mt-3 mb-4">
      <Row className="justify-content-md-center">
        <Col className="col-md-8">
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
             
    
            
             <Row>
               <Col lg={2}>  <div className="player " >
                {/* <ReactPlayer
                url={e.trailer}
                controls
                // witdht='50px'
                // height='80px'
            
                /> */}
                
             </div></Col>
 
            </Row>
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
