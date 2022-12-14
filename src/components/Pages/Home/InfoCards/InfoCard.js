import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({card}) => {
    const {id, name, description, icon,bgClass} = card;
    return (
        <>
         <Link to='/aPPointment'>
        <div className={`card card-side bg-base-100 shadow-xl p-5 text-white ${bgClass}`}>
           
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
            
        </div>
        </Link>
        </>
        
    );
};

export default InfoCard;