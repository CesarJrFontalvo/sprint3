// import { useFormik } from 'formik';
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
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log(dispatch(listEmployeeAsync()))
    //  }, [])

    // const formik = useFormik({
    //     initialValues: {
    //         url: "",
    //         nombre: "",
    //         descripcion: "",
    //         fec_estro: "",
    //         valoracion: ""
    //     },
        // onSubmit: (data) => {
        //     dispatch(registerEmployeeAsync(data))
        // },

    // })

  return (
            <Container className="d-flex">
                 {
                     listaPelicula.map((e, i) => (
                <li >
                <ul key={i} className="  col-sm-12 ">
                   
                    <Card   >
                       <Card.Img variant="top" src={e.url} alt="..." />
                        <Card.Body>
                            <Card.Text>
                                   <h4>Titulo: {e.nombre}</h4>
                                   <h4> {e.valoracion}</h4>
                            </Card.Text>
                      </Card.Body>
                    </Card>
                </ul>

                </li>
                    ))
                    }

            </Container>
      
        );
};

export default Cardd;
