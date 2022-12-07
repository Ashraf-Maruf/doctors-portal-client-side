import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCards from './InfoCards';
const InfoCard = () => {

    const InfoCardData = [
        {
            id:1,
            name:"Opening Hours",
            icon: clock,
            title:'Opening hours are 9.30am–5.45pm, Mon–Fri.',
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        },
        {
            id:2,
            name:"Visit our location",
            icon:marker,
            title:'Brooklyn, NY 10036, United States',
            bgClass: 'bg-accent'
        },
        {
            id:3,
            icon:phone,
            name:"Contact us now",
            title:'+000 123 456789',
            bgClass: 'bg-gradient-to-r from-secondary to-primary'
        }
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