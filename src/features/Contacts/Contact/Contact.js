import React from "react";
import './../../../common/container.css'
import style from "../../Table.module.css";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationCityTwoToneIcon from "@material-ui/icons/LocationCityTwoTone";
import WebIcon from "@material-ui/icons/Web";
import PublicTwoToneIcon from "@material-ui/icons/PublicTwoTone";
import CreateIcon from '@material-ui/icons/Create';

export const Contact = (props) => {
    const [open, setOpen] = React.useState(false);

    return <div className="grid-container" onClick={() => setOpen(!open)}>
            <th className={!open ? style.closedInfo : style.openInfo}>
                <IconButton size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                </IconButton>
            </th>
            {
                !open
                    ? <th>
                        <img
                            src={props.avatar}
                            alt='Some img'
                            className={!open ? style.usersPhoto : style.usersPhotoBig}/>
                    </th>
                    : <tr>
                        <th>
                            <img
                                src={props.avatar}
                                alt='Some img'
                                className={!open ? style.usersPhoto : style.usersPhotoBig}/>
                        </th>
                        <th><IconButton size="small" onClick={() => {}}>
                            {<CreateIcon/>}
                        </IconButton></th>
                    </tr>
            }

            {!open ? <tr className={style.boxElement}>
                    <th>{props.name}</th>
                </tr>
                : <tr className={style.boxElement}>
                    <th>{props.name}</th>
                    <th><LocationCityTwoToneIcon fontSize="small"/> {props.city}</th>
                </tr>}
            {!open ? <tr className={style.boxElement}>
                    <th>{props.phone}</th>
                </tr>
                : <tr className={style.boxElement}>
                    <th>{props.phone}</th>
                    <th><PublicTwoToneIcon fontSize="small"/> {props.country}</th>
                </tr>}
            {!open ? <tr className={style.boxElement}>
                    <th>{props.email}</th>
                </tr>
                : <tr className={style.boxElement}>
                    <th>{props.email}</th>
                    <th><WebIcon fontSize="small"/> {props.website}</th>
                </tr>}
    </div>
}