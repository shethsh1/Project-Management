import React, { useEffect } from 'react'
import {
    Typography,
    Box
} from '@mui/material'
import Column from './Column'
import type { itemInterface, statusInterface } from '../../redux/slices/taskSlice'
import { getTasks } from '../../redux/slices/taskSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'



type props = {
    id: number
}

export default function Trello({ id }: props) {
    const { tasks, statuses, isFetching } = useAppSelector(state => state.task)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getTasks(id))

    }, [])

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

    if (isFetching) {
        return <Box>Loading...</Box>
    }







    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh - 32px - 80px)',
            width: '100%',
            boxSizing: 'border-box'
        }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Team Project Board
            </Typography>

            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                mt: 2,
                gap: '20px'
            }}>

                <Column title={"open"} />
                <Column title={"Review"} />
                <Column title={"Closed"} />
                <Column title={"Done"} />
                <Column title={"Done"} />



            </Box>

        </Box>


    )
}
