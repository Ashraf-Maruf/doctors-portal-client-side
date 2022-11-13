import React from 'react';

const InfoCards = ({ card }) => {
    const { icon, name, title, bgClass } = card;
    return (
        <div>
            <div className={`card card-side shadow-xl py-12 px-6 ${bgClass}`}>
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;