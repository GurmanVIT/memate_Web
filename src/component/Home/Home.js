import React from 'react';
import Business from '../Business/Business';
import Slider from '../Slider/Slider';
import Tabs from '../Tab/Tabs';
import SolveCommon from '../SolveCommon/SolveCommon';
import Onboarding from '../Onboarding/Onboarding';
import Features from '../Features/Features';
import BoostProfit from '../BoostProfit/BoostProfit';
import RealFinancial from '../RealFinancial/RealFinancial';
import Motivate from '../Motivate/Motivate';
import TotalControl from '../TotalControl/TotalControl';
import Understand from '../Understand/Understand';
import SimplePowerfull from '../SimplePowerfull/SimplePowerfull';
import Seamless from '../Seamless/Seamless';

const Home = () => {

    return (
        <div className='coustom_container'>
            <Business />
            <Slider />
            <Tabs />
            <SolveCommon />
            <Onboarding />
            <Features />
            <BoostProfit />
            <RealFinancial />
            <Motivate />
            <TotalControl />
            <Understand />
            <Seamless />
            <SimplePowerfull />
        </div>
    )
}

export default Home;