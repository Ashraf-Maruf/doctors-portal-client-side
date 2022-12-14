import React from 'react';
import bgchair from '../../../assets/images/bg.png';
import AppointmentChair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate,setSelectedDate}) => {   
    return (
        <header>
            <div className="hero py-5 md:py-14 lg:py-14 xl:h-screen"
                style={{
                    background: `url(${bgchair})`
                }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={AppointmentChair} className=" lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mr-32'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                       
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;