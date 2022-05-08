import React from 'react'
import {
    Typography,
    Box
} from '@mui/material'
import Column from './Column'
import type { itemInterface, statusInterface } from '../../redux/slices/taskSlice'

const data: itemInterface[] = [
    {
        id: 1,
        statusId: 1,
        type: "Bug Fix",
        content: "Fill out human interest distribution form",
        userId: 1
    },
    {
        id: 2,
        statusId: 1,
        type: "Bug Fix",
        content: "Get an anniversary gift",
        userId: 1
    },
    {
        id: 3,
        type: "Bug Fix",
        statusId: 1,
        content: "Call the bank to talk about investments",
        userId: 1
    },
    {
        id: 4,
        statusId: 1,
        type: "Bug Fix",
        content: "Finish reading Intro to UI/UX",
        userId: 1
    }
];

export const statuses: statusInterface[] = [
    {
        id: 1,
        name: "open",
    },
    {
        id: 2,
        name: "in progress",
    },
    {
        id: 4,
        name: "in review",

    },
    {
        id: 4,
        name: "done",
    }
];



export default function Trello() {

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
