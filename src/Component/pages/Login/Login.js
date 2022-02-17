import { Button, Container, Grid, TextField, Typography,CircularProgress,Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../images/login.png'
import useAuth from '../../../hooks/useAuth'


const Login = () => {
const [loginData,setLoginData] = useState({});
const {user,loginUser,isLoading, authError,signWithGoogle} =useAuth();

const location = useLocation();
const navigate   = useNavigate();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newfield = {...loginData}
    newfield[field]=value;
    setLoginData(newfield);
    console.log(field,value);
  } 
  const handleGoogle = () => {
    signWithGoogle(location,navigate)
  }

  const handleSubmit = e => {
    loginUser(loginData.email, loginData.password,location,navigate)
    e.preventDefault();
  }
    return (
      <Container>
        
        <Grid container spacing ={2}>
          <Grid sx={{display:'flex',alignItems:"center"}} item xs={12} md={6}>
          <Box sx={{boxShadow:4, py:11}}>
          <Typography sx={{color:"blue" ,fontWeight:600}} variant="body1"  gutterBottom>
         Log In
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField
          sx={{width:"75%", m:1}}
            id="standard-basic"
            onBlur={handleOnChange}
            label="Your Email"
            name="email"
            type="email"
            variant="standard" />
          <TextField
          sx={{width:"75%", m:1}}
            id="standard-basic"
            onBlur={handleOnChange}
            label="Password"
            name="password"
            type="password"
            variant="standard" />
          <Box >
          Are you new User? please<NavLink to="/signup">
         <Button variant="text">SignUP.</  Button>
          </NavLink>
          
         </Box>

         
          {isLoading && <CircularProgress></CircularProgress>}
          {user?.email && <Alert severity="success"> Created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
          <Button type="submit" variant="contained"> Sign In</Button>
          </form >
          <p>------------or------------</p>
          <Button onClick={handleGoogle}
          variant="contained">Google Signin</Button>
             </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img sx={{width:1}} src={login} alt="" />
            </Grid>
          </Grid>
      </Container>
    );
};

export default Login;