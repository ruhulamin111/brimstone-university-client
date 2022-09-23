import React from 'react';
import Campus from '../Campus/Campus';
import Faculty from '../Faculty/Faculty';
import Banner from './Banner';
import Highlights from './Highlights';

const Home = () => {
    return (
        <div>
            <Banner />
            <Highlights />
            <Faculty />
            <Campus />
        </div>
    );
};

export default Home;