import {cardsAPI} from "../api/api";

const SET_USERS = 'SET_USERS'

let InitialState = {
    contactsData: []
}

export const contactsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, contactsData: action.data}
        default:
            return state
    }
}

export const setUsers = (data) => ({type: SET_USERS, data})

export const getUsers = () => (dispatch) => {
    cardsAPI.getUsersData()
        .then(data => {
            dispatch(setUsers(data))
        })
        .catch(error => {
                console.log(error.response);
        })
}