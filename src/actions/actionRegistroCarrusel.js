
import  {typesRegistroCarrusel} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";


// READ
export const listCarruselAsync = () => {
    return async (dispatch) => {

        const querySnapshot = await getDocs(collection(db, "registroCarrusel"));
        const empleados = [];
        querySnapshot.forEach((doc) => {
            empleados.push({
                ...doc.data()
            })
        });
        dispatch(listCarruselSync(empleados));
    }
}

export const listCarruselSync = (listaCarrusel) => {
    return {
        type: typesRegistroCarrusel.lista,
        payload: listaCarrusel
    }
}