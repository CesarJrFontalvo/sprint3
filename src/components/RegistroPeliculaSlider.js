import React from 'react'
import {Container, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { registerEmployeeAsync } from '../actions/actionRegistroCarrusel';
import { fileUpload } from '../helpers/FileUpload';

const RegistroPeliculaSlider = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            url: "",
            nombre: "",
            descripcion: "",
            fec_estreno: "",
            valoracion: "",
            trailer: ""
        },
        onSubmit: (data) => {
            dispatch(registerEmployeeAsync(data))
        },

    })

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
            .then(response => {
                formik.initialValues.url = response
                console.log(response);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
  return (
        <div>
            <Container className="mt-4">
            <Form id="Form"onSubmit={formik.handleSubmit}>

               <Form.Group>
                    <Form.Label>Url de la imagen:</Form.Label>

                    <Form.Control
                        type="file"
                        placeholder="Nombre de la pelicula"
                        name="nombre"
                        onClick={handlePictureClick}
                        onChange={handleFileChanged}
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
                        type="number"
                        placeholder="Califica esta pelicula"
                        name="valoracion"
                    
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>url trailer:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Url del trailer"
                        name="trailer"
                    
                        onChange={formik.handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="me-3">
                    Registrar
                </Button>

                {/* <Button variant="success" >
                    <Link to="https://www.youtube.com/watch?v=eBq8WGviI_Q" target="_blank" id="irLogin" >Ir a Login</Link>
                </Button> */}

            </Form>
        </Container>
    </div>
  )
}

export default RegistroPeliculaSlider