import { typesRegistroCarrusel } from "../types/types";


const initialState = {
    listaCarrusel: []
}


export const carruselReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesRegistroCarrusel.register:
            return {
                listaCarrusel: [action.payload]
            }
        case typesRegistroCarrusel.lista:
            return {
                listaCarrusel: [...action.payload]
            }
        case typesRegistroCarrusel.delete:
            return {
                listaCarrusel: state.listaCarrusel.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
