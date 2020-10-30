import React, {useState} from "react";
import './../../../common/container.css'
import style from './Contact.module.css'
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CreateIcon from '@material-ui/icons/Create';
import {ContactReduxForm} from "./ContactForm";

export const Contact = React.memo((props) => {
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false)

    const activatedEditMode = () => {
        setEditMode(true)
    }

    const deActivatedEditMode = (event) =>  {
        const {name, city, phone, country, email, website} = event.target
        let contact = {
            id: props.data.id,
            avatar: props.data.avatar,
            name: name.value || props.data.name,
            email: email.value || props.data.email,
            website: website.value || props.data.website,
            phone: phone.value || props.data.phone,
            address: {
                city: city.value || props.data.address.city,
                country: country.value || props.data.address.country,
            }
        }
        setEditMode(false)
        props.changeData(contact)
    }

    return !editMode ? <div className="grid-container-content">
        <div className={!open ? style.closedInfo : style.openInfo}>
            <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
            </IconButton>
        </div>
        <div>
            <img
                src={props.data.avatar}
                alt='Some img'
                className={!open ? style.usersPhoto : style.usersPhotoBig}/>
        </div>
        <div>
            <IconButton size="small" onClick={activatedEditMode}>
                {<CreateIcon/>}
            </IconButton>
        </div>
        <div className={style.box}>
            {!open ? <div>{props.data.name}</div>
                : <div>
                    <div className={style.boxElement}>{props.data.name}</div>
                    <div className={style.boxElement}>{props.data.address.city}</div>
                </div>}
        </div>
        <div className={style.box}>
            {!open
                ? <div>{props.data.phone}</div>
                : <div>
                    <div className={style.boxElement}>{props.data.phone}</div>
                    <div className={style.boxElement}>{props.data.address.country}</div>
                </div>}
        </div>
        <div className={style.box}>
            {!open
                ? <div>{props.data.email}</div>
                : <div>
                    <div className={style.boxElement}>{props.data.email}</div>
                    <div className={style.boxElement}>{props.data.website}</div>
                </div>}
        </div>
    </div> : <ContactReduxForm onSubmit={deActivatedEditMode}
                               value={props.data}
                               setOpen={setOpen}
                               activatedEditMode={activatedEditMode}
                               deActivatedEditMode={deActivatedEditMode}
    />
})
