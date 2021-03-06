import React from 'react';
import Navigation from '../../Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AppointmentHeader/AvailableAppoint/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>
        </div>
    );
};

export default Appointment;