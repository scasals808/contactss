import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "./contactsReducer";
import style from "./Table.module.css";
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import WebIcon from '@material-ui/icons/Web';
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            }
        }
    }
);

function Row(props) {
    const [open, setOpen] = React.useState(false);
    const rowStyles = useStyles();

    return (
        <>
            <TableRow className={rowStyles.root} onClick={() => setOpen(!open)}>
                <TableCell>
                    <div className={!open ? style.closedInfo : style.openInfo }>
                        <IconButton size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </IconButton>
                    </div>
                </TableCell>
                <TableCell style={{width: 200}} align="center">
                    <img
                        src={props.avatar}
                        alt='Some img'
                        className={!open ? style.usersPhoto : style.usersPhotoBig}/>
                </TableCell>
                <TableCell align="center">
                    {props.name}
                </TableCell>
                <TableCell align="center">{props.phone}</TableCell>
                <TableCell align="center">{props.email}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <Table>
                                <TableRow>
                                    <TableCell/>
                                    <TableCell style={{width: 200}} align="center">
                                        <Button color="primary">Settings</Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className={style.boxElement}>
                                            <LocationCityTwoToneIcon/>
                                            {props.city}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className={style.boxElement}>
                                            <PublicTwoToneIcon/>
                                            {props.country}
                                        </div>
                                    </TableCell>
                                    <TableCell align="center">
                                        <div className={style.boxElement}>
                                            <WebIcon/>
                                            {props.website}
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CollapsibleTable() {
    const users = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow colSpan={5}>
                        <TableCell/>
                        <TableCell>
                            <Paper component="form">
                                <InputBase
                                    style={{margin: 10}}
                                    placeholder="Search"
                                    inputProps={{'aria-label': 'search'}}
                                />
                            </Paper>
                        </TableCell>
                        <TableCell align="center"><span>Name</span></TableCell>
                        <TableCell align="center"><span>Phone</span></TableCell>
                        <TableCell align="center"><span>Email</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.contactsData.map((row, index) => (
                        <Row key={index}
                             id={row.id}
                             avatar={row.avatar}
                             name={row.name}
                             email={row.email}
                             phone={row.phone}
                             city={row.address.city}
                             country={row.address.country}
                             website={row.website}
                             favorite={row.favorite}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

