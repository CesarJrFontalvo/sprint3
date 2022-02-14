
import  {typesRegistroCarrusel} from '../types/types';
import { db } from "../firebase/firebaseConfig";
import { addDoc, collection,getDocs} from "@firebase/firestore";


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
// ------------------------------------------
export const registerEmployeeAsync = (newEmployee) => {

    return(dispatch) => {

        addDoc(collection(db,"registroCarrusel"),newEmployee)
        .then(resp => {
            dispatch(registerEmployeeSync(newEmployee))
            // dispatch(listEmployeeAsync())
        })
        .catch(error => {
            console.log(error);
        })
    }
 }

export const registerEmployeeSync = (listaCarrusel) => {
    return{
        type: typesRegistroCarrusel.register,
        payload: listaCarrusel
    }

}