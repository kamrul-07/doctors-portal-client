import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign:"center"
};

const BookingModel = ({open,handleClose,booking,date,setSuccessBooking}) => {
   const {name,time}=booking;
   const {user} = useAuth();

   const initializeinfo= {patientName:user.displayName,email:user.email,phone:''}
   const [bookingInfo,setBookingInfo] = useState(initializeinfo);

   const handleOnBlur = e => {
    const field =e.target.name;
    const value =e.target.value;
    const newField = {...bookingInfo}
    newField[field]=value;
    setBookingInfo(newField)
   }

   const handleSubmit = e =>{
     const appointment = {
       ...bookingInfo,
       time,
       serviceName:name,
       date:date.toLocaleDateString()
     }
     fetch('http://localhost:5000/appointments',
     {
      method:'POST',
      headers : {
        'content-type':"application/json"
      },
      body:JSON.stringify(appointment)
     })
     .then (res => res.json())
     .then (data => {
       if(data.insertedId){
        setSuccessBooking(true)
        handleClose();
       }
     })


       
       e.preventDefault();
   }
    return (
        <div>
            <Modal
            
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form onSubmit={handleSubmit}>
          <TextField
         disabled
         sx={{width:"90%",m:1}}
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
          <TextField
         
         sx={{width:"90%",m:1}}
         name="patientName"
         onBlur={handleOnBlur}
          id="outlined-size-small"
          defaultValue={user.displayName}
          size="small"
        />
          <TextField
     
         sx={{width:"90%",m:1}}
         onBlur={handleOnBlur}
         name="email"
          id="outlined-size-small"
          defaultValue={user.email}
          size="small"
        />
          <TextField
        
         sx={{width:"90%",m:1}}
         onBlur={handleOnBlur}
         defaultValue="Phone Number"
          id="outlined-size-small"
          placeholder="Phone Number"
          size="small"
        />
          <TextField
         disabled
         sx={{width:"90%",m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type="submit" variant="outlined">Submit</Button>
          </form>
        </Box>
      </Modal>
    
        </div>
    );
};

export default BookingModel;