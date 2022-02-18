import { typesRegistroPelicula } from "../types/types";


const initialState = {
    listaPelicula: [],
    search:[]
}


export const employeesReducers = (state = initialState, action) => {
    switch (action.type) {
        case typesRegistroPelicula.register:
            return {
                listaPelicula: [action.payload]
            }
        case typesRegistroPelicula.list:
            return {
                listaPelicula: [...action.payload]
            }
        case typesRegistroPelicula.listBusqueda:
            return {
                search: action.payload
            }
        case typesRegistroPelicula.delete:
            return {
                listaPelicula: state.listaPelicula.filter(emp => emp.correo !== action.payload)
            }
        default:
            return state;
    }
}
