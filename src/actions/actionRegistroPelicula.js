
import  {typesRegistroPelicula} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";


// READ
export const listEmployeeAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "registroPeliculas"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listSync(empleados));
    }
}

export const listSync = (listaPelicula) => {
    return {
        type: typesRegistroPelicula.list,
        payload: listaPelicula
    }
}
// BUSQUEDA------------------------------------------------
export const listSearch = (searchText) => {
    
    return async (dispatch) => {
       
        const querySnapshot =  collection(db,"registroPeliculas");
        const q = query(querySnapshot,where('nombre','==',searchText))
        // const querySnapshot = await getDocs(collection(db, "registroPeliculas"),where('nombre','==',searchText));
        const pelicula = [];
        const datos = await getDocs(q);
        
        datos.forEach((doc) => {
            pelicula.push({
                // uid:doc.id,
                ...doc.data()
            })
        });
        dispatch(listSe(pelicula));
    }
}

export const listSe = (search) => {
    return {
        type: typesRegistroPelicula.listBusqueda,
        payload: search
    }
}
// ------REGISTRAR---------------------------------------------------------
export const registerEmployeeAsync = (newEmployee) => {

    return(dispatch) => {

        addDoc(collection(db,"registroPeliculas"),newEmployee)
        .then(resp => {
            dispatch(registerEmployeeSync(newEmployee))
             dispatch(listEmployeeAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerEmployeeSync = (listaPelicula) => {
    return{
        type: typesRegistroPelicula.register,
        payload: listaPelicula
    }

}
// -------------------------------------------------------------

// ---------ELIMINAR----------------------------------------------------------
export const deleteEmployeeAsync = (nombre) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"registroPeliculas");
        const q = query(estCollection,where("nombre","==",nombre))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"registroPeliculas",docu.id));
        })
        dispatch(deleteSync(nombre));
        dispatch(listEmployeeAsync())
    }
}

export const deleteSync = (nombre) => {
    return{
        type: typesRegistroPelicula.delete,
        payload: nombre
    }
}
