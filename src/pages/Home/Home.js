import React from 'react';
import Campus from '../Campus/Campus';
import Faculty from '../Faculty/Faculty';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <Faculty />
            <Campus />
        </div>
    );
};

export default Home;