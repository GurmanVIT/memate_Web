import React from 'react';
import insights_img from "../../assets/img/insights_img.svg";
import { Fade } from 'react-reveal';

const RealFinancial = () => {

    return (
        <>
            <div className='memate_feature'>
                <div className="feature-section">
                    <div className="feature-content">
                        <h4>Finance</h4>
                        <h2>Real-time financial</h2>
                        <h1>insights</h1>
                        <p>Get instant clarity on your financial status. Our software simplifies accounting tasks and improves cash and liquidity management, giving you a real-time view of your finances.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image insights_img">
                        <Fade right duration={1000}>
                            <img src={insights_img} alt="insights_img" />
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    )
}

export default RealFinancial;