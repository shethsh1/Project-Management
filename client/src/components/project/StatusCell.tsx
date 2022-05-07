import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    Typography,
    TablePagination,
    TableFooter,
    IconButton,
    Box,
    Button,
    Menu,
    MenuItem
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from './CreateModalForm'
import type { updatedProjectObj } from '../../redux/slices/projectSlice'
import { updateProject } from '../../redux/slices/projectSlice'
import moment from 'moment';

type props = {
    status: "Not Active" | "In Progress" | "Completed" ,
    id: number
}

export default function StatusCell({ status, id }: props) {
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const updateValue = (val : "Not Active" | "In Progress" | "Completed", id : number) => {
        
        if(val === status) {
            handleClose()
            return
        }

        const updatedProj : updatedProjectObj = {
            projectId : id,
            updateVariables: {
                status: val
            }
        }

        dispatch(updateProject(updatedProj))
        handleClose()
        

    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem onClick={() => updateValue("Not Active", id)}>Not Active</MenuItem>
                <MenuItem onClick={() => updateValue("In Progress", id)}>In Progress</MenuItem>
                <MenuItem onClick={() => updateValue("Completed", id)}>Completed</MenuItem>
            </Menu>

            <Typography component={'span'} onClick={handleClick}>

                {status}

            </Typography>
        </>

    )
}
