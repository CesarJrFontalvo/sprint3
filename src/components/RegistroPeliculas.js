import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import {Container, Button, Form  } from 'react-bootstrap';
import { useDispatch} from 'react-redux';
// import { Link } from 'react-router-dom';
import { registerEmployeeAsync, listEmployeeAsync } from '../actions/actionRegistroPelicula';
import ListaRegistro from './ListaRegistro';
// import { useForm } from '../hooks/useForm';

const RegistroPeliculas = () => {
    const dispatch = useDispatch();
    
    // const { listaPelicula } = useSelector(store => store.employee);
    // console.log(listaPelicula)
    
    useEffect(() => {
        dispatch(listEmployeeAsync())
     }, [dispatch])
    

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            descripcion: "",
            fec_estreno: "",
            valoracion: ""
        },
        onSubmit: (data) => {
            dispatch(registerEmployeeAsync(data))
            dispatch(listEmployeeAsync())
        },

    })

   
  return (
        <div>
        <Container id="contenLogin" className="mt-4" >
        <Form id="Form"onSubmit={formik.handleSubmit }>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Url de la imagen:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Url"
                    name="url"
                    
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Nombre de la pelicula"
                    name="nombre"
                  
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Descripcion:</Form.Label>
                <Form.Control
                    type="textarea"
                    placeholder="Descripcion de la pelicula"
                    name="descripcion"
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Fecha de estreno:</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Fecha de estreno"
                    name="fec_estreno"
                  
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Valoración:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Califica esta pelicula"
                    name="valoracion"
                  
                    onChange={formik.handleChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="me-3" >
                Registrar
            </Button>

            {/* <Button variant="success" >
                <Link to="https://www.youtube.com/watch?v=eBq8WGviI_Q" target="_blank" id="irLogin" >Ir a Login</Link>
            </Button> */}
    <Button variant="warning" type="reset"  onClick={ e => formik.resetForm()}> Reset</Button>
        </Form>
    </Container>

    <ListaRegistro/>
    </div>
  )
}

export default RegistroPeliculas