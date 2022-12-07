import React from 'react';

const ServicesCards = ({ services }) => {
    const { icon, name, title } = services;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='pt-8'><img src={icon} alt="Shoes" /></figure>
            <div className="card-body text-center ">
                <h2 className=' text-accent font-semibold'>{name}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default ServicesCards;