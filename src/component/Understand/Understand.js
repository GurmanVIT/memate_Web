import React from 'react';
import workforce_img from "../../assets/img/workforce_img.svg";
import { Fade } from 'react-reveal';

const Understand = () => {

    return (
        <>
            <div className='memate_feature'>
                <div className="feature-section">
                    <div className="feature-content">
                        <h4>In-depth</h4>
                        <h2>Understand </h2>
                        <h1>your workforce</h1>
                        <p>Keep track of employee and subcontractor hours efficiently. Our system offers real-time updates on their progress, ensuring you're always informed about project developments and workforce productivity.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image">
                        <Fade right duration={1000}>
                            <img src={workforce_img} alt="workforce_img" />
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Understand;