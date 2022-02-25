import '@testing-library/jest-dom'
import {loginReducer} from '../../reducers/loginReducer'
import {types} from '../../types/types'

describe('Pruebas en login reducer', ()=>{
    test('debe realizar el login',()=>{
        const initState={};
        const action ={
            type: types.login,
            payload:{
                id:'123',
                displayname:'cesar'
            }
        }
        const state=loginReducer( initState, action);
        expect( state).toEqual({
            id:'123',
            name:'cesar'
        });
    })

    test('validar logout',()=>{
        const initState={
            id:'123',
            name:'cesar'
        };
        const action ={
            type: types.logout,
        };
        const state=loginReducer( initState, action);
        expect( state).toEqual({});
    })
})