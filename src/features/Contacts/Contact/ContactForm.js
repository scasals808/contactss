import style from "./Contact.module.css";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CreateIcon from "@material-ui/icons/Create";
import {Field, reduxForm} from "redux-form";
import {TextField} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";

const ContactForm = ({onSubmit, open, setOpen, value, activatedEditMode}) => {
    return <form onSubmit={onSubmit}>
        <div className="grid-container-content-form">
            <div className={!open ? style.openInfo : style.closedInfo}>
                <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </div>
            <div>
                <img
                    src={value.avatar}
                    alt='Some img'
                    className={!open ? style.usersPhotoBig : style.usersPhoto}/>
            </div>
            <div>
                <IconButton size="small" onClick={activatedEditMode}>
                    {<CreateIcon/>}
                </IconButton>
            </div>
            <div className={style.box}>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='name' placeholder={value.name}/>
                </div>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='city' placeholder={value.address.city}/>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='phone' placeholder={value.phone}/>
                </div>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='country' placeholder={value.address.country}/>
                </div>
            </div>
            <div className={style.box}>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='email' placeholder={value.email}/>
                </div>
                <div className={style.boxElement}>
                    <Field component={TextField} name='name' id='website' placeholder={value.website}/>
                </div>
            </div>
            <div>
                <button><AddIcon/></button>
            </div>
        </div>
    </form>
}

export const ContactReduxForm = reduxForm({
    form: 'contact'
})(ContactForm)