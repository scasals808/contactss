import React from "react";
import '../../common/container.css'
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

export const Header = (props) => {
    return <div className='grid-container'>
        <div>1</div>
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
    </div>
}