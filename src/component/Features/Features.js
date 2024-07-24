import React from 'react';
import memate_girl_img from "../../assets/img/memate_girl_img.svg";
import FadeIn from 'react-fade-in/lib/FadeIn';

const Features = () => {

    return (
        <>
            <div className='memate_feature'>
                <h3>Memate</h3>
                <div className='div_bg'>
                    <FadeIn>
                        <h1 className='gradient-text'>Features</h1>
                    </FadeIn>

                </div>
                <div className="feature-section">
                    <div className="feature-content">
                        <h4>All-in-one</h4>
                        <h2>Streamline</h2>
                        <h1> operations</h1>
                        <p>Our software automates your workflows, making your business operations easier. It's based on proven strategies and is designed for quick setup, boosting efficiency from day one.</p>
                        <button className="get-started-btn">Get started</button>
                    </div>
                    <div className="feature-image">
                        <img src={memate_girl_img} alt="memate_girl_img" />
                    </div>
                </div>
            </div >
        </>
    )
}

export default Features;