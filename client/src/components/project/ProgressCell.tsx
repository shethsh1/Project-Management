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
    MenuItem,
    TextField
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import type { user } from '../../redux/slices/authSlice'
import CreateModalForm from './CreateModalForm'
import type { updatedProjectObj } from '../../redux/slices/projectSlice'
import { updateProject } from '../../redux/slices/projectSlice'
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';


function CircularProgressWithLabel(props: { value: number }) {
    console.log(`value is ${props.value}`)
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color="text.primary">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}




type props = {
    progress: number,
    id: number
}

export default function ProgressCell({ progress, id }: props) {
    const [newProgress, setNewProgress] = useState<string>(progress.toString())
    const dispatch = useAppDispatch()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const updateValue = (event: any) => {
        event.preventDefault()


        if (newProgress === "") {
            return
        }


        console.log(newProgress)


 
        const updatedProj: updatedProjectObj = {
            projectId: id,
            updateVariables: {
                progress: parseInt(newProgress, 10)
            }
        }

        dispatch(updateProject(updatedProj))
        handleClose()


    }

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setNewProgress(progress.toString() || "0")
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
                <MenuItem>

                    <Box component="form">
                        <TextField
                            value={newProgress}
                            variant="standard"
                            required
                            onChange={
                                (event: any) => {
                                    if (event.target.value >= 0 && event.target.value <= 100) {
                                        setNewProgress(event.target.value)
                                    }
                                }
                            }

                        />

                        <Button type="submit" onClick={updateValue}>save</Button>
                    </Box>


                </MenuItem>

            </Menu>

            <Typography component={'span'} onClick={handleClick}>

                <CircularProgressWithLabel value={progress} />

            </Typography>
        </>

    )
}
