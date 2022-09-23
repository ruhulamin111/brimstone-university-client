import React from 'react';
import { useAchivement } from '../../utilities/useAchivement';
import Achivement from './Achivement';

const Campus = () => {
    const [achivement] = useAchivement();

    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center py-10'>
                <h1 className='text-3xl font-bold pb-5'>Our Achivement</h1>
                <p>To help you build your career and   accomplish your goal, <br />we are offering 20 undergraduate and master's programs under 6 faculties.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10'>
                {
                    achivement.map((item, index) => <Achivement
                        key={index}
                        item={item}
                    ></Achivement>)
                }
            </div>

        </div>
    );
};

export default Campus;