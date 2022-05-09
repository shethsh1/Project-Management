import React from 'react'
import {
    Box,
    Typography,
    IconButton
} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from './Card'
import type { itemInterface } from '../../redux/slices/taskSlice'
import { useDrop } from "react-dnd";
import { onDrop } from '../../redux/slices/taskSlice'
import { useAppDispatch } from '../../redux/hooks'

type props = {
    title: string,
    tasks: itemInterface[],
    statusId: number
}

export default function Column({ title, tasks, statusId }: props) {
    const dispatch = useAppDispatch()

    const [_, drop]: any = useDrop({
        accept: 'item',
        canDrop: ({ dragStatusId }: { dragStatusId: number }, monitor) => {
            return dragStatusId !== statusId
        },
        drop: ({ id, dragStatusId }: { id: number, dragStatusId: number }) => {
            dispatch(onDrop([id, dragStatusId, statusId]))
        }


    })


    return (
        <Box ref={drop} sx={{
            display: 'flex',
            flexDirection: 'column',
            width: "18rem",
            backgroundColor: '#ebecf0',
            p: 1

        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Typography variant="subtitle1" sx={{ pl: 2 }}>
                    {title}
                </Typography>

                <IconButton>
                    <AddBoxIcon />
                </IconButton>

            </Box>

            {tasks.map((task, idx) => {
                if (task.statusId === statusId) {
                    return <Card index={idx} key={task.id} task={task} />
                }
            }
            )}


        </Box>
    )
}
