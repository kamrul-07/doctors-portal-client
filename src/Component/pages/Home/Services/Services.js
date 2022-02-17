import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'


const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi mollitia accusamus doloremque dolorem. Nam deserunt provident exercitationem, dolores reiciendis vel eligendi atque vitae tempore cumque perspiciatis dolorem illum assumenda.",
        img:fluoride
    },
    {
        name:"Cavity Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi mollitia accusamus doloremque dolorem. Nam deserunt provident exercitationem, dolores reiciendis vel eligendi atque vitae tempore cumque perspiciatis dolorem illum assumenda.",
        img:cavity
    },
    {
        name:"Teeth Whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quasi mollitia accusamus doloremque dolorem. Nam deserunt provident exercitationem, dolores reiciendis vel eligendi atque vitae tempore cumque perspiciatis dolorem illum assumenda.",
        img:whitening
    }
]


const Services = () => {
   
    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <Container>
      
      <Typography sx={{fontWeight:500, m:2, color:"success.main"}} variant="h5" component="div">
      
        OUR SERVICES <i sx={{Color:"mediumturquoise"}} className="fas fa-hand-holding-medical "></i>
        </Typography>
      <Typography sx={{fontWeight:600,m:1}} variant="h4" component="div">
        Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service key={service.name}
                service={service} ></Service>)

              
          }
        
      </Grid>
      </Container>
    </Box>
        </div>
    );
};

export default Services;