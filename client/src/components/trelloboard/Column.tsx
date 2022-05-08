import React from 'react'
import {
    Box,
    Typography,
    IconButton
} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Card from './Card'

type props = {
    title: string
}

export default function Column({title} : props) {
  return (
    <Box sx={{
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
            <Typography variant="subtitle1" sx={{pl: 2}}>
                {title}
            </Typography>

            <IconButton>
                <AddBoxIcon />
            </IconButton>

        </Box>

        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        <Card type={"design"} content={"This is the title of the card for the thing that needs to be done"} />
        




        
    
    </Box>
  )
}
