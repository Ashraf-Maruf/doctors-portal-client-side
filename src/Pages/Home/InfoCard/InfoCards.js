import React from 'react';

const InfoCards = ({ card }) => {
    const { icon, name, title, bgClass } = card;
    return (
        <div>
            <div className={`card md:card-side shadow-xl p-6 ${bgClass}`}>
                <figure><img src={icon} className=" xl:pr-6 md:pr-6 pb-6 xl:pb-0" alt="Movie" /></figure>
                <div className="card-body p-0 text-white">
                    <h2 className="card-title">{name}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;