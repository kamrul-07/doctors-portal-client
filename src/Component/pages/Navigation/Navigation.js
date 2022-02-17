
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import './Navigation.css'
import {  NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const stylee = {
  fontSize:"30px"
}


const Navigation = () => {
    
    const {logOut,user} = useAuth()
    
    
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
                    <FontAwesomeIcon style={stylee} icon="fa-solid fa-syringe" />Doctors Portal
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment">
                                    <Button color="inherit">Appointment</Button>
                                </NavLink>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                    <Button color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} color="inherit">Logout</Button>
                            </Box>
                            :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
        </div>
    );
};

export default Navigation;

// {
//   user.email ?
//       <Box>
//           <Typography variant="p" component="div">
//               {user.displayName}
//           </Typography>
//           <Button onClick={logOut} variant="outlined" color="inherit">Logout</Button>
//       </Box>
//       :
//       <NavLink style={{ color: 'white', textDecoration: 'none' }} to="/login"><Button color="inherit">Login</Button></NavLink>
// }