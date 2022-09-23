import React from 'react';

const FacultyItem = ({ item }) => {
    const { name, img, description } = item;

    return (
        <div >
            <img src={img} alt="" className='h-72 w-full object-cover' />
            <h1 className='py-5 text-2xl font-medium'>{name}</h1>
            <p>{description}</p>
            <button className='btn btn-md btn-primary text-white  hover:text-primary hover:bg-white'>Apply Now</button>
        </div>
    );
};

export default FacultyItem;