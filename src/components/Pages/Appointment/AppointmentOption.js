import React from 'react';


const AppointmentOption = ({option, setTreatement}) => {
    const {name, slots} = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl font-bold text-purple-600 text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Availabel</p>
                <div className='card-actions justify-center'>
                  
                    <label 
                    onClick={() => setTreatement(option)} 
                    disabled={slots.length === 0}
                    htmlFor="booking-modal" 
                    className="btn  btn-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
      
    );
};

export default AppointmentOption;