import React, { useEffect } from 'react';
import { Link as DomLink } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  InputAdornment,
  Divider
} from '@mui/material';
import Sidebackground from '../../components/login/SideBackground'
import LinksHeader from '../../components/login/LinksHeader'



const classes = {
  root: {
    height: '100vh',
    minWidth: '300px'
  },
  bgContainer: {
    display: 'block',

    "@media (max-width: 959px)": {
      display: 'none'

    }

  },



  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },



  textFieldContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '60%',
    marginBottom: '80px',
    "@media (max-width: 1400px)": {
      width: '100%',
      maxWidth: '70%'
    },
    "@media (max-width: 959px)": {
      width: '100%',
      maxWidth: '50%'
    }


  },

  title: {
    fontWeight: 'bold',
    marginBottom: '32px',
    whiteSpace: 'nowrap'
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '32px'
  },

  submitButton: {
    paddingLeft: '64px',
    paddingRight: '64px',
    paddingTop: '16px',
    paddingBottom: '16px'

  },

  forgot: {
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 'bold'

  }

};



const Login = () => {


  return (
    <Grid container sx={classes.root}>

      <Grid item md={5} sx={{
          display: {xs: 'none', md: 'block'}
      }}>
        <Sidebackground />
      </Grid>




      <Grid container item xs={12} md={7} sx={classes.formContainer}>

          <LinksHeader text="Don't have an account?" link="/signup" buttonText="Create account" />

        <Box component="form" sx={classes.textFieldContainer}>

          <Typography variant="h4" gutterBottom sx={classes.title}>
            Welcome back!
          </Typography>


          <FormControl margin="normal" required fullWidth>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"

              inputProps={{
                style: { fontSize: 20 }
              }}

            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <TextField
              label="password"
              aria-label="password"

              type="password"
              name="password"

              InputProps={{
                endAdornment: <InputAdornment position="end"><Box sx={classes.forgot}>Forgot?</Box></InputAdornment>,
              }}

            />
          </FormControl>


          <Box sx={classes.buttonContainer}>
            <Button type="submit" color="primary" variant="contained" size="large" sx={classes.submitButton}>
              Login
            </Button>
          </Box>




        </Box>

      </Grid>

    </Grid>
  );
};

export default Login;