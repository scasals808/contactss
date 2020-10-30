import React from "react";
import '../../common/container.css'
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import style from './Header.css'


export const Header = (props) => {
    return <header className={'grid-container'}>
        <div className={style.logo}>
            <img style={{
                width: 55,
                height: 55, borderRadius: 30
            }} src='https://www.vhv.rs/dpng/d/406-4061655_doge-meme-mlg-dog-doggo-funny-doge-thug.png'/>
        </div>
        <div>
            <Paper component="form">
                <InputBase
                    style={{margin: 10}}
                    placeholder="Search"
                    inputProps={{'aria-label': 'search'}}
                />
            </Paper>
        </div>
        <div><span>Name</span></div>
        <div><span>Phone</span></div>
        <div><span>Email</span></div>
    </header>
}