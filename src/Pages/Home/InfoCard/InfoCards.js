import React from 'react';

const InfoCards = ({ card }) => {
    const { icon, name, title, bgClass } = card;
    return (
        <div>
            <div className={`card md:card-side shadow-xl px-8 py-12 lg:py-0 ${bgClass}`}>
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