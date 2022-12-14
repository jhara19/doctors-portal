import React from 'react';

const Service = ({service}) => {
    const {id, title, details,icon} = service;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;