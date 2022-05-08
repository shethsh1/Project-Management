import React from 'react'
import {
    Box,
    Typography,
    IconButton,
    Alert,
    AlertTitle,
    Avatar
} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useAppSelector } from '../../redux/hooks';
import type { user } from '../../redux/slices/authSlice';

type props = {
    type: string,
    content: string
}

export default function Card({type, content} : props) {
    const user = useAppSelector(state => state.auth.user) as user

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxSizing: 'border-box',
            cursor: 'pointer',
            marginTop: '0.75rem',
            

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
                    {type}
                </Box>
            </Typography>


            <Typography sx={{ marginTop: '0.75rem', lineHeight: '1.25rem', fontSize: '0.85rem' }}>
                {content}
            </Typography>

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1}}>

                <Typography sx={{fontSize: '.85rem', fontWeight: 900}}>
                    {user.username}
                </Typography>

                <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={user.photoUrl} />
            </Box>







        </Box>
    )
}
