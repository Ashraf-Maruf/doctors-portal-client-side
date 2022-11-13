import React from 'react';

const ServicesCards = ({ services }) => {
    const { icon, name, title } = services;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className='pt-8'><img src={icon} alt="Shoes" /></figure>
            <div className="card-body text-center ">
                <h2>{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    );
};

export default ServicesCards;