import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';


const Carrusel = () => {



  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col lg="8">
          <Carousel >
            <Carousel.Item>
              <img
                  className=" w-100"
                src="https://depor.com/resizer/t-VpjqquRLEW4wpnhKx_V3YVQI8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DMQN6OF2GJFYNCTKCWWEU7PY7U.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className=" w-100"
                src="https://images.ecestaticos.com/leU_vr7vwdksdq_fkLknTvqTmlw=/0x90:1696x1041/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4eb%2Fa77%2F5f9%2F4eba775f9bbe9f2f8c602b8731e81a46.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" w-100"
                src="https://cdn.forbes.com.mx/2021/09/Jumanji-hbo-max-640x360.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

    </Container>

  );

};

export default Carrusel;
