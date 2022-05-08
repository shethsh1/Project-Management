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
import { validateLocaleAndSetLanguage } from 'typescript';
import StarIcon from '@mui/icons-material/Star';
import DeleteDialog from './DeleteDialog'

type props = {
    id: number
}

export default function TableMenu({ id }: props) {
    const [openDialog, setOpenDialog] = useState(false);
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <>
            <DeleteDialog openDialog={openDialog} setOpenDialog={setOpenDialog} id={id} />


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
                <MenuItem onClick={() => {
                    setOpenDialog(true)
                    handleClose()
                }}>Delete</MenuItem>
                <MenuItem disabled>View members</MenuItem>

            </Menu>

            <IconButton onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>

        </>


    )
}
