
import React, { useEffect } from 'react';

import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listEmployeeAsync } from '../actions/actionRegistroPelicula';
// import { listEmployeeAsync } from '../actions/actionRegistroPelicula';

const Cardd = () => {

    const dispatch = useDispatch();

    
    
    const { listaPelicula } = useSelector(store => store.employee);
    console.log(listaPelicula)
    
    useEffect(() => {
        dispatch(listEmployeeAsync())
     }, [])
    

  return (           
            <div> 
                <h1 className="h1Peliculas">Todas las peliculas</h1>
     
            <Container className="d-flex">
            
                 {
                     listaPelicula.map((e, i) => (
                <li >
                <ul key={i} className="  col-sm-12 ">
                   
                    <Card   >
                       <Card.Img variant="top" src={e.url} alt="..." />
                       <h4> ⭐{e.valoracion}</h4>
                       <h5> {e.nombre}</h5>
                        {/* <Card.Body>
                            <Card.Text>
                                   
                                   <h4> {e.valoracion}</h4>
                            </Card.Text>
                      </Card.Body> */}
                    </Card>
                </ul>

                </li>
                    ))
                    }

            </Container>
            </div>      
        );
};

export default Cardd;
