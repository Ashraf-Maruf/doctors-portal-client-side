import React from 'react';
import bgchair from '../../../assets/images/bg.png';
import AppointmentChair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({slectedDate,setSlectedDate}) => {   
    return (
        <header>
            <div className="hero lg:h-screen"
                style={{
                    background: `url(${bgchair})`
                }}
            >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={AppointmentChair} className=" lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div className=' lg:mr-32'>
                        <DayPicker
                            mode='single'
                            selected={slectedDate}
                            onSelect={setSlectedDate}
                        />
                       
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;