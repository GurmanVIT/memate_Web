import React from 'react';
import Business from '../Business/Business';
import Slider from '../Slider/Slider';
import Tabs from '../Tab/Tabs';
import SolveCommon from '../SolveCommon/SolveCommon';

const Home = () => {

    return (
        <div className='coustom_container'>
            <Business />
            <Slider />
            <Tabs />
            <SolveCommon />
        </div>
    )
}

export default Home;