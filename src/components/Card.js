
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
     
            <Container className="card-group">
            
                 {
                     listaPelicula.map((e, i) => (
               <div className="mt-5 me-5 ">
                   
                
                   {/* className="mt-5 me-4" */}
                    <Card  key={i}   >
                        
                       <Card.Img  width="400" src={e.url} alt="..." />
                       <h4> ⭐{e.valoracion}</h4>
                       <h5> {e.nombre}</h5>
                        {/* <Card.Body>
                            <Card.Text>
                                   
                                   <h4> {e.valoracion}</h4>
                            </Card.Text>
                      </Card.Body> */}
                    </Card>
                
               </div>

               
                    ))
                    }

            </Container>
            </div>      
        );
};

export default Cardd;
