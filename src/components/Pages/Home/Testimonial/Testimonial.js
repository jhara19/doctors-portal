import React from 'react';
import quote from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import Reviews from '../../Reviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name:'Shifa Islam',
            img: people1,
            userReview: 'I am shifa islam. I read in class 3. My rolll is 13. I live in Sylhet.',
            location:'Sylhet'
},
        {
            _id: 2,
            name:'Shifa Islam',
            img: people2,
            userReview: 'I am shifa islam. I read in class 3. My rolll is 13. I live in Sylhet.',
            location:'Sylhet'
},
        {
            _id: 3,
            name:'Shifa Islam',
            img: people3,
            userReview: 'I am shifa islam. I read in class 3. My rolll is 13. I live in Sylhet.',
            location:'Sylhet'
},

    
]
    return (
        <section className='my-16'>
            <div>
                <div className='text-center'>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl '>What our patients says</h2>
                </div>
                
            </div>
            <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                reviews.map(review =><Reviews
                   key={review._id}
                   review ={review}
                ></Reviews>)
              }
             
            </div>
        </section>
    );
};

export default Testimonial;