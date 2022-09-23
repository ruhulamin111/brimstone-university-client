import React from 'react';
import { useFaculty } from '../../utilities/useFaculty';
import FacultyItem from './FacultyItem';

const Faculty = () => {
    const [faculty] = useFaculty();

    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold pb-5'>Our Faculties</h1>
                <p>To help you build your career and   accomplish your goal, <br />we are offering 20 undergraduate and master's programs under 6 faculties.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    faculty.map((item, index) => <FacultyItem
                        key={index}
                        item={item}
                    ></FacultyItem>)
                }
            </div>

        </div>
    );
};

export default Faculty;