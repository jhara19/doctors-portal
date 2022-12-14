import React from 'react';
import Banner from '../Banner';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Testimonial></Testimonial>
            <MakeAppointment></MakeAppointment>
            
        </div>
    );
};

export default Home;