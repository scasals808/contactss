import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware  from 'redux-thunk';
import {contactsReducer} from "../features/contactsReducer";

let reducers = combineReducers({
    contacts: contactsReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store