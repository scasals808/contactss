import {cardsAPI} from "../api/api";

//constants
const SET_USERS = 'SET_USERS'
const SET_NEW_DATA = 'SET_NEW_DATA'

let InitialState = {
    contactsData: {},
    isLoaded: false
}

//reducer
export const contactsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                contactsData: action.data,
                isLoaded: true
            }
        case SET_NEW_DATA: {
            return {...state, contactsData: {...state.contactsData, [action.newData.id]: action.newData}
            }
        }
        default:
            return state
    }
}

//actions
export const setUsers = (data) => ({type: SET_USERS, data})
export const setData = (newData) => ({type: SET_NEW_DATA, newData})

//thunk
export const getUsers = () => (dispatch) => {
    cardsAPI.getUsersData()
        .then((res) => {
            const data = res.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {})
            dispatch(setUsers(data))
        })
        .catch(error => console.log(error))
}
export const setNewData = (newData) => (dispatch) => {
    dispatch(setData(newData))
}