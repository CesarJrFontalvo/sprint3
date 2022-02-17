import React, { useEffect }from 'react';
import Cardd from '../components/Card';
import Carrusel from '../components/Carrusel';
import { useDispatch, useSelector } from 'react-redux';
import { listEmployeeAsync, listSearch } from '../actions/actionRegistroPelicula';
import { Container } from 'react-bootstrap';
const List = () => {
  const dispatch = useDispatch();

    
    
    const { listaPelicula } = useSelector(store => store.employee);
    console.log(listaPelicula);

    const { search } = useSelector(store => store.employee);
    console.log(search)
    
    useEffect(() => {
        dispatch(listEmployeeAsync())
        dispatch(listSearch())
     }, [])
  return (
        <div>
           
            <Carrusel/>


            <h1 className="h1Peliculas">Todas las peliculas</h1>
            <Container className="card-group me-5 mt-5 mb-5">
          {
            (search) ?
            (
              search.map( (peli,i)=>(
                <Cardd className="me-5 mt-5" key={i}
                {...peli}/>
              ))
            ):
            listaPelicula.map( (peli,i)=>(
              <Cardd className="me-5 mt-5"  key={i}
              {...peli}/>
            ))
           
           }
            </Container>
        </div>)
};

export default List;
