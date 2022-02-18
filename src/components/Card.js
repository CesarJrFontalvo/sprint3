
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


    // const dispatch = useDispatch();

    
    
    // const { listaPelicula } = useSelector(store => store.employee);
    // console.log(listaPelicula)
    
    // useEffect(() => {
    //     dispatch(listEmployeeAsync())
    //  }, [])
    

  return (           
            <div> 
           
                 {/* {
                     listaPelicula.map((e, i) => ( */}
              
                   
                
                   {/* className="mt-5 me-4" */}
                    {/* <Card  key={i}   > */}
                    <Card className="me-2 mt-5"  >
                        
                       <Card.Img  width="200" heigt="200" src={url} alt="..." />
                       <h4> ⭐{valoracion}</h4>
                       <h5> {nombre}</h5>
                        {/* <Card.Body>
                            <Card.Text>
                                   
                                   <h4> {e.valoracion}</h4>
                            </Card.Text>
                      </Card.Body> */}
                    </Card>
                
           

               
                    {/* ))
                    } */}

           
            </div>      
        );
};

export default Cardd;
