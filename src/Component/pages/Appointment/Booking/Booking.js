import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModel from '../BookingModel/BookingModel'

const Booking = ({booking,date,setSuccessBooking}) => {
    const {name,time,space}=booking;
    const handleOpen = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
           <Paper elevation={3} sx={{padding:5}}>
           <Typography sx={{color:"info.main"}} variant="h6" gutterBottom component="div">
        {name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        {time}
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        SPACE AVAILABLE {space}
      </Typography>
      <Button onClick={handleOpen} variant="outlined">Booking</Button>
           </Paper>
        </Grid>
        <BookingModel
        handleClose={handleClose}
        open={open}
        booking={booking}
        date={date}
        setSuccessBooking={setSuccessBooking}
        >
          </BookingModel></>
    );
};

export default Booking;