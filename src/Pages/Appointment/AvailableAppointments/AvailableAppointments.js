import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate,'PP');
    const { data: appointmentsOption = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOption', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOption?date=${date}`);
            const data = await res.json();
            return data
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className="my-32">
            <p className='text-center text-secondary font-normal mb-24'>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    appointmentsOption.map(appointmentOption => <AppointmentOption
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
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