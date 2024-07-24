import React from 'react';
import your_team_img from "../../assets/img/your_team_img.svg";
import { Fade } from 'react-reveal';

const Motivate = () => {

    return (
        <>
            <div className='memate_feature'>
                <div className="feature-section your_team_sec">
                    <div className="feature-content">
                        <h4>Powerful</h4>
                        <h2>Motivate</h2>
                        <h1>your team</h1>
                        <p>Encourage your employees and subcontractors with customised bonus schemes and incentives for each project, fostering a motivated and productive workforce.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image">
                        <Fade right duration={1000}>
                            <img src={your_team_img} alt={your_team_img} />
                        </Fade>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Motivate;