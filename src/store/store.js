import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware  from 'redux-thunk';
import {contactsReducer} from "../features/contactsReducer";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (error) {
        //ignore
    }
}

let reducers = combineReducers({
    contacts: contactsReducer
})
const persistedState = loadState()

export let store = createStore(reducers, persistedState, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    saveState(store.getState())
})

window.store = store