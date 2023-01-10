import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards';
const InfoCard = () => {

    const InfoCardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open 9.00 am to 5.00pm everyday',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]

    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                InfoCardData.map(card => <InfoCards
                    key={card.id}
                    card={card}
                ></InfoCards>)
            }
        </div>
    );
};

export default InfoCard;