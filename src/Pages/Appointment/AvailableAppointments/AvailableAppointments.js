import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP');
    const { data: appointmentsOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-nine-alpha.vercel.app/appointmentOption?date=${date}`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className="xl:my-32 xl:mx-6">
            <p className='text-center text-secondary font-normal xl:mb-24 mb-6 md:text-4xl xl:text-3xl xl:mt-5 mt-5'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className=' lg:mx-6 md:mx-6 xl:mx-0 mx-6'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        appointmentsOption.map(appointmentOption => <AppointmentOption
                            key={appointmentOption._id}
                            appointmentOption={appointmentOption}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                    }
                </div>
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;