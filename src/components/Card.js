
// import React, { useEffect } from 'react';

import { Card } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { listEmployeeAsync } from '../actions/actionRegistroPelicula';
// import { listEmployeeAsync } from '../actions/actionRegistroPelicula';

const Cardd = ({
    id,
    url,
    nombre,
    descripcion,
    fec_estreno,
    valoracion
}) => {


    

  return (           
            <div> 
           
                
                    <Card  id="cardList" className="m-4 mt-3"  >
                        
                       <Card.Img  src={url} alt="..." />
                              <h4> ⭐{valoracion}</h4>
                              <h5> {nombre}</h5>
                        {/* <Card.Body>
                            <Card.Text>
                                          
                             </Card.Text>
                             
                      </Card.Body> */}
                    </Card>
                
           

               
                    {/* ))
                    } */}

           
            </div>      
        );
};

export default Cardd;
