import React, {useEffect} from "react";
import {Contact} from "./Contact/Contact";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../contactsReducer";

export const Contacts = () => {

    const users = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return <>
        {
        users.contactsData.map((row, index) => (
            <Contact key={index}
                     id={row.id}
                     avatar={row.avatar}
                     name={row.name}
                     email={row.email}
                     phone={row.phone}
                     city={row.address.city}
                     country={row.address.country}
                     website={row.website}
                     favorite={row.favorite}/>
        ))
    }
    </>
}