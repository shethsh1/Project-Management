import React from 'react';

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



const Signup = () => {


  return (
    <Grid container sx={classes.root}>

      <Grid item md={5} sx={{
          display: {xs: 'none', md: 'block'}
      }}>
        <Sidebackground />
      </Grid>




      <Grid container item xs={12} md={7} sx={classes.formContainer}>

          <LinksHeader text="Already have an account?" link="/login" buttonText="Login" />

        <Box component="form" sx={classes.textFieldContainer}>

          <Typography variant="h4" gutterBottom sx={classes.title}>
            Create an account.
          </Typography>


          <FormControl margin="normal" required fullWidth>
            <TextField
              aria-label="username"
              label="Username"
              name="username"
              type="text"
              InputLabelProps={{
                style: { color: 'grey' },
              }}
              inputProps={{
                style: { fontSize: 20 }
              }}
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <TextField
              label="E-mail address"
              aria-label="e-mail address"
              type="email"
              name="email"
              InputLabelProps={{
                style: { color: 'grey' },
              }}
              inputProps={{
                style: { fontSize: 20 }
              }}
            />
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <TextField
              aria-label="password"
              label="Password"
              type="password"
              inputProps={{ minLength: 6, fontSize: 20 }}
              name="password"
              InputLabelProps={{
                style: { color: 'grey' },
              }}
            />

          </FormControl>


          <Box sx={classes.buttonContainer}>
            <Button type="submit" color="primary" variant="contained" size="large" sx={classes.submitButton}>
              Signup
            </Button>
          </Box>

        </Box>

      </Grid>

    </Grid>
  );
};

export default Signup;