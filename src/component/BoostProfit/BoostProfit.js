import React from 'react';
import efficiency_img from "../../assets/img/efficiency_img.svg";
import { Fade } from 'react-reveal';

const BoostProfit = () => {

    return (
        <>
            <div className='memate_feature'>
                <div className="feature-section">
                    <div className="feature-content">
                        <h4>Dashboard</h4>
                        <h2>Boost Profits</h2>
                        <h1>& efficiency</h1>
                        <p>Cut costs and boost efficiency effortlessly. Our software has built-in analytics to easily understand your financial health, helping you make informed decisions to increase profitability.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image">
                        <Fade right duration={1000}>
                            <img src={efficiency_img} alt="efficiency_img" />
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BoostProfit;