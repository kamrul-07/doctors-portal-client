import React from 'react';
import Navigation from '../Navigation/Navigation';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import Banner from './Banner/Banner';
import Element from './Element/Element';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
          <Navigation></Navigation>
          <Banner ></Banner>
          <Element></Element>
          <Services></Services>
          <AppointmentBanner></AppointmentBanner>
          
        </div>
    );
};

export default Home;