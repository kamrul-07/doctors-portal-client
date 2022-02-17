import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {  Grid,Container } from '@mui/material';
import { Box ,} from '@mui/system';
import './Element.css'

const stylesheet ={
   
   margin:'0 50px',
   

}

const Element = () => {
    return (
          
    <Container>
      <Box sx={{ flexGrow: 1 }}>
    <Grid style={stylesheet}  container spacing={{ xs: 12, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid sx={{marginTop: -7}}  item xs={12} sm={8} md={4} >
    <Card sx={{ maxWidth: 345, backgroundColor: 'info.main',width:250,}} >
        
            <div>
            <i class="far fa-clock sty"></i>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{color:'white'}}>
               Contact us now.
              </Typography>
             
              <Typography variant="body2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nemo!
        </Typography>
            </CardContent>
          
        </Card>
         </Grid>
    <Grid sx={{marginTop: -7 }} item xs={12} sm={8} md={4} >
    <Card sx={{ maxWidth: 345, width:250, backgroundColor:'black'}}>
          <div>
          <i class="fas fa-map-marker-alt sty1"></i>
          </div>
            
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{color:"white"}}>
                Visit our location.
              </Typography>
              <Typography variant="body2 " sx={{color:"white"}}>
              Boalkhali,Chittagong.
        </Typography>
              
            </CardContent>
          
        </Card>
         </Grid>
    <Grid sx={{marginTop: -7}} item xs={12} sm={8} md={4} >
    <Card  sx={{ maxWidth: 345,backgroundColor: 'info.main',width:250,height:170 }}>
          
            <div >
            <div  > 
            <i  className="fas fa-phone-alt sty"></i>
            </div>
            <div>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{color:"white"}}>
              Contact us now.
              </Typography>
              <Typography variant="body2" sx={{color:"white"}}>
              
              +00000000000
        </Typography>
            </CardContent>
            </div>
            </div>
          
        </Card>
         </Grid>
    </Grid>
  </Box>
    </Container>
    );
};

export default Element;