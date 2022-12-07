import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <section className='max-w-[1440px] mx-auto'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                selectedDate={selectedDate}
            ></AvailableAppointments>
        </section>
    );
};

export default Appointment;