import React from 'react';

const Achivement = ({ item }) => {
    const { name, img, description } = item;

    return (
        <div >
            <img src={img} alt="" className='h-72 w-full object-cover' />
            <h1 className='py-5 text-2xl font-medium'>{name}</h1>
            <p>{description}</p>
            <button className='btn my-5 btn-primary text-white  hover:text-primary hover:bg-white'>Read More</button>
        </div>
    );
};

export default Achivement;