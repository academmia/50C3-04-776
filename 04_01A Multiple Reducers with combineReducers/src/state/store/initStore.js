import { createStore } from 'redux';
import reducer from './reducers/reducer';

// 4.a
// const initialState = {
//     listToBorrow: [],
//     otherData: {
//         id: 101
//     }
// } 

// 2.a - acest `reducer` nu ia decizii, returneaza aceasi valoare
// const reducer = () => ({ listToBorrow: [ { id: 1, name: 'Book One' } ] }) 

// 4.b
// const reducer = (state, action) => {
//     console.log(`Reducer data: `, state, action);
//     return state
// } 

const initialState = {
    listToBorrow: []
} 

export const initStore = () => {
    //1.
    // return createStore(); // Uncaught Error: Expected the reducer to be a function.

    // 2.b  
    // return createStore(reducer); // inspectam in console proprietatile store-ului

    // 4.c
    return createStore(reducer, initialState); // inspectam in console proprietatile store-ului
}  
