import React from 'react';

const Reviews = ({ review }) => {

    const { _id, name, img, location, userReview } = review;


    return (
        <div className=''>
            <div className="card shadow-xl">

                <div className="card-body ">
                    <p>{userReview}</p>
                    
                    <div className="flex items-center mt-6">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                        </div>   
                        <div>
                            <h5 className='text-lg'>{name}</h5>
                            <p>{location}</p>
                        </div>
                    
                    </div>
                </div>


            </div>
            {/* <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{userReview}</p>
            </div> 
        </div> */}

        </div>
    );
};

export default Reviews;