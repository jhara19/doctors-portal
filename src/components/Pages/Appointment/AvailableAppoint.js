import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppoint = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions ] = useState([]);
    const [treatement, setTreatement] = useState(null);
    useEffect(() =>{
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAppointmentOptions(data);
        })
    },[]);
    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Availabel Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
              {
                appointmentOptions.map(option => <AppointmentOption
                  key={option._id}
                  option={option}
                  setTreatement={setTreatement}
                ></AppointmentOption>)
              }
            </div>
           { 
             treatement &&
           <BookingModal
              treatement={treatement}
              selectedDate={selectedDate}
              setTreatement={setTreatement}
            ></BookingModal>}
        </section>
    );
};

export default AvailableAppoint;