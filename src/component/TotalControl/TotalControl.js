import React from 'react';
import anywhere_img from "../../assets/img/anywhere_img.svg";
import { Fade } from 'react-reveal';

const TotalControl = () => {

    return (
        <>
            <div className='memate_feature'>
                <div className="feature-section">
                    <div className="feature-content">
                        <h4>Agile</h4>
                        <h2>Total Control</h2>
                        <h1>anywhere</h1>
                        <p>Manage every aspect of your business with complete control, no matter where you are. Our platform offers real-time insights into your business’s performance, enabling you to make swift, informed decisions.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image insights_img">
                        <Fade right duration={1000}>
                            <img src={anywhere_img} alt="anywhere_img" />
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TotalControl;