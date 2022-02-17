import { Button, CircularProgress, Container, Grid, TextField, Typography ,Alert} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import login from '../../../images/login.png'

const Signup = () => {
    const [registerData,setRegisterData] = useState({});
    const {registerUser,isLoading,user,authError} =useAuth();

   const navigate = useNavigate();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newfield = {...registerData}
    newfield[field]=value;
    setRegisterData(newfield);
    console.log(field,value,newfield);
  } 
  const handleOnSubmit = e => {
    if (registerData.password !== registerData.password2) {
        alert('password did not match!');
        return
    }
  registerUser(registerData.email, registerData.password, registerData.name, navigate)
    e.preventDefault();
}
    return (
        <Container>
        <Grid container spacing ={2}>
          <Grid sx={{display:'flex',alignItems:"center"}} item xs={12} md={6}>
          <Box sx={{boxShadow:4, py:11}}>
          <Typography sx={{color:"blue" ,fontWeight:600}} variant="body1"  gutterBottom>
         Sign Up
          </Typography>
          {!isLoading && <form onSubmit={handleOnSubmit}>
          <TextField
          name="name"
          onBlur={handleOnChange}
          sx={{width:"75%", m:1}}
          id="standard-basic"
          label="Your Name"
          variant="standard"
                            />
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
            label="Your Password"
            name="password"
            type="password"
            variant="standard" />
          <TextField
          sx={{width:"75%", m:1}}
            id="standard-basic"
            onBlur={handleOnChange}
            label="Comfirm Your Password"
            name="password2"
            type="password"
            variant="standard" />
            
          <Box >
          Are you Old User? please<NavLink to="/signin">
         <Button variant="text">Signin</  Button>
          </NavLink>
          
         </Box>
         <Button type="submit" variant="contained">Sign up</Button>
          </form >}
          {isLoading && <CircularProgress></CircularProgress>}
          {user?.email && <Alert severity="success"> Created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
             </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <img sytle={{width:"100%"}} src={login} alt="" />
            </Grid>
          </Grid>
      </Container>
    );
};

export default Signup;