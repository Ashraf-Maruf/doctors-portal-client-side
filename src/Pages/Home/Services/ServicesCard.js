import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServicesCards from './ServicesCards';
const ServicesCard = () => {

    const ServicesCardData = [
        {
            id: 1,
            icon: fluoride,
            name: 'Fluoride Treatment',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            icon: cavity,
            name: 'Cavity Filling',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            icon: whitening,
            name: 'Teeth Whitening',
            title: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]

    return (
        <div className=' my-36'>
            <div className=' mb-16 w-4/5 text-center mx-auto'>
                <h5 className=' mb-2'>Our Services</h5>
                <h4>Services We Provide</h4>
            </div>
            <div className=' grid grid-cols-3 gap-x-8'>
                {
                    ServicesCardData.map(services => <ServicesCards
                        key={services.id}
                        services={services}
                    ></ServicesCards>)
                }
            </div>
        </div>
    );
};

export default ServicesCard;