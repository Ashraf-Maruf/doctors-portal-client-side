import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [slectedDate, setSlectedDate] = useState(new Date());
    return (
        <section className='mx-5 '>
            <AppointmentBanner
                slectedDate={slectedDate}
                setSlectedDate={setSlectedDate}
            ></AppointmentBanner>
            <AvailableAppointments
                slectedDate={slectedDate}
            ></AvailableAppointments>
        </section>
    );
};

export default Appointment;