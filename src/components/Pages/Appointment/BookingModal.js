import { format } from 'date-fns/esm';
import React from 'react';


const BookingModal = ({ treatement, setTreatement, selectedDate }) => {
    const { name, slots } = treatement;
    const date = format(selectedDate, 'PP');

    const handleBooking = e => {
     e.preventDefault();
     const form = e.target;
     const slot = form.slot.value;
     const name = form.name.value;
     const email = form.email.value;
     const phone = form.phone.value;

     const booking = {
        appointmentDate: date,
        treatement: name,
        patient: name,
        slot, 
        email,
        phone
    }


     console.log(booking)
     setTreatement(null)
       form.reset();
    }
    

    return (

        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled value={date} className='input w-full input-bordered mt-5' />
                        <select name='slot' className="select select-bordered w-full">
                           
                            {slots.map((slot, i) => <option 
                            value={slot}
                            key={i}
                            >{slot}</option>)}
                        </select>
                        {/* //this input will carry the users info who is login this site */}
                        <input name='name' type="text" placeholder='Type your name' className='input w-full input-bordered mt-5' />
                        <input name='email' type="email" placeholder='Type your email address' className='input w-full input-bordered mt-5' />
                        <input name='phone' type="text" placeholder='Type your phone' className='input w-full input-bordered mt-5' />
                        <input type="submit" value='Submit' className='btn btn-accent w-full max-w-xs' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;