import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeAsync } from '../actions/actionRegistroPelicula';


const ListaRegistro = () => {
    const dispatch = useDispatch();
    
    const { listaPelicula } = useSelector(store => store.employee);
    console.log(listaPelicula)

  return (
    <div>
    <table className="table text-center mt-3 text-info" >

        <thead>
            <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripción</th>
                <th scope="col">Eliminar</th>
                <th scope="col">Modificar</th>
            </tr>
        </thead>
        <tbody>
            {
                listaPelicula.map((e, i) => (
                    <tr key={i}  >
                        <td><img src={e.url} width="100" height="100" /></td>
                        <td>{e.nombre}</td>
                        <td>{e.descripcion}</td>

                        <td>
                        <input
                            value="Delete"
                            type="button"
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteEmployeeAsync(e.nombre))}
                        /> 
                        </td>
                       
                         <td>
                        <input
                        value="Modificar"
                        type="button"
                        className="btn btn-primary"
                        // onClick={() => dispatch(deleteEmployeeAsync(e.correo))}
                    />
                        </td>

                    </tr>
                ))
            }
            
        </tbody>
    </table>
    {/* { employees.map((e, i) => (
    <div  className="col-md-4">
        <div key={i} className="card animated fadeInUp">
        <img
            src={e.url}
            alt=".."
            className="card-img-top"
            width="100"
        />
        <h4>{e.nombre} {e.descripcion}</h4>
        </div>
    </div>
    ))} */}

</div>
  )
}

export default ListaRegistro