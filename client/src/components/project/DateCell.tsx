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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type props = {
    endDate: string,
    id: number
}

export default function DateCell({ endDate, id }: props) {
    const dispatch = useAppDispatch()


    const updateValue = (val: string) => {


        const updatedProj: updatedProjectObj = {
            projectId: id,
            updateVariables: {
                endDate: val
            }
        }

        dispatch(updateProject(updatedProj))



    }


    return (
        <>
            <DatePicker
                selected={new Date(moment(endDate).format("MM/DD/YYYY"))}
                onChange={(date : any) => updateValue(date)}
                minDate={new Date()}

                customInput={
                    <span>
                        {moment(endDate).format("MMMM DD YYYY")}
                    </span>

                }

            />


        </>

    )
}
