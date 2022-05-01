import React from 'react'
import {
    Box,
    Typography,
    Paper
} from '@mui/material';

const classes = {

    bgCover: {
        position: 'relative',
        color: '#fff',
        backgroundSize: 'cover',
        backgroundImage: `linear-gradient(
      #3a8dffdb, 
      #86B9FF99), 
      url(https://res.cloudinary.com/dudegkgw9/image/upload/v1651386319/Banner-image-The-Importance-of-Project-Management_qygo2n.webp)`,
        height: '100vh',
        opacity: 0.85
    },
    bgTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    bgText: {
        position: 'relative'
    },
    bgIcon: {
        marginBottom: '20px',
        width: '100px',
        height: '100px'
    },

}



export default function SideBackground() {


    return (
        <Paper sx={classes.bgCover}>


            <Box sx={classes.bgTextContainer}>

                <Typography variant="h4" sx={classes.bgText} align="center">
                    <img src={'https://res.cloudinary.com/dudegkgw9/image/upload/v1651386691/icons8-project-64_rbfeip.png'} style={classes.bgIcon} /> <br />

                    Plan out your next project <br />
                    with us!
                </Typography>
            </Box>

        </Paper>
    );

}