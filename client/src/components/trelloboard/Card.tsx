import React, { useRef } from 'react'
import {
    Box,
    Typography,
    IconButton,
    Alert,
    AlertTitle,
    Avatar
} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import type { user } from '../../redux/slices/authSlice';
import { useDrag, useDrop } from "react-dnd";
import type { itemInterface } from "../../redux/slices/taskSlice"


type props = {
    task: itemInterface
    index: number
}

export default function Card({ index, task }: props) {



    const user = useAppSelector(state => state.auth.user) as user
    const ref: any = useRef(null)



    const [{ isDragging }, drag] = useDrag(() => ({
        type: "item",
        item: { id: task.id, dragStatusId: task.statusId, index: index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));



    drag((ref))

    return (
        <Box ref={ref} sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            backgroundColor: isDragging ? '#3b3f50' : 'white',
            borderRadius: '0.5rem',
            boxSizing: 'border-box',
            cursor: 'pointer',
            marginTop: '0.75rem',



        }}>

            <Box sx={{
                visibility: isDragging ? 'hidden' : 'visible'
            }}>

                <Typography variant="caption">
                    <Box component="span" sx={{
                        backgroundColor: 'rgba(236,72,153)',
                        fontWeight: 700,
                        borderRadius: '9999px',
                        fontSize: '.75rem',
                        p: 0.5,
                        opacity: 0.5,


                    }}>
                        {task.type}
                    </Box>
                </Typography>


                <Typography sx={{ marginTop: '0.75rem', lineHeight: '1.25rem', fontSize: '0.85rem' }}>
                    {task.content}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>

                    <Typography sx={{ fontSize: '.85rem', fontWeight: 900 }}>
                        {user.username}
                    </Typography>

                    <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={user.photoUrl} />
                </Box>

            </Box>

        </Box>

    )
}
