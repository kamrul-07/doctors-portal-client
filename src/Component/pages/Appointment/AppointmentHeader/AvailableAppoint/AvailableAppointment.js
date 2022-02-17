import { Container, Grid, Typography,Alert } from '@mui/material';
import React ,{useState} from 'react';
import Booking from '../../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 25,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 38,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 19,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 15,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 29,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 49,
        space: 10,
    },
]

const AvailableAppointment = ({date}) => {
    const [successBooking,setSuccessBooking]=useState(false)
    return (
      <Container>
         
          <Typography sx={{ mb: 3 ,fontStyle:'italic',color:"warning.main"}} variant="h5" gutterBottom component="div">
          AvailableAppointment on {date.toDateString()}
          {successBooking && <Alert severity="success"> Booking successfully!</Alert>}
      </Typography>
          <Grid container spacing ={2}>
              <Grid sm={{my:2}} container spacing={4}>
                  {
                      bookings.map(booking => <Booking 
                        date={date} 
                        key={booking.id}
                         booking={booking}
                         setSuccessBooking={setSuccessBooking}
                         ></Booking>)
                  }
              </Grid>
          </Grid>
      </Container>
    );
};

export default AvailableAppointment;