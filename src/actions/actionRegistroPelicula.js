
import  {typesRegistroPelicula} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";


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