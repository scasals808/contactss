import React, {useCallback, useEffect} from "react";
import {Contact} from "./Contact/Contact";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, setNewData} from "../contactsReducer";

export const Contacts = () => {
    const users = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!users.isLoaded) dispatch(getUsers())
    }, [])

    const changeData = useCallback((newData) => {
        dispatch(setNewData(newData))
    }, [])

    return <>
        {
            Object.values(users.contactsData).map((contact) =>
                <Contact
                    key={contact.id}
                    data={contact}
                    changeData={changeData}/>)
        }
    </>
}