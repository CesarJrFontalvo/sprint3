
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeAsync } from '../actions/actionRegistroPelicula';
import { Container} from 'react-bootstrap';

const ListaRegistro = () => {
    const dispatch = useDispatch();
    
    const { listaPelicula } = useSelector(store => store.employee);
    console.log(listaPelicula)

   

  return (
    <div>
      <Container>

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
   

</Container>
</div>
  )
}

export default ListaRegistro