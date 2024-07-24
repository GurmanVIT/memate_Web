import React from 'react';
import onboarding from "../../assets/img/onboarding.svg";
import { Button } from 'react-bootstrap';
import { Fade } from 'react-reveal';

const Onboarding = () => {

    return (
        <>
            <div className='onboarding_sec'>
                <div className='offer_zero_sec'>
                    <h2>We offer zero fees for</h2>
                    <h1>onboarding</h1>
                    <p>Plus, we provide a 14-day free trial because we believe our<br />
                        software will become indispensable to your business.</p>
                    <div className='book_demo_btn'>
                        <Button>Book a demo</Button>
                    </div>
                    <Fade duration={1000}>
                        <img src={onboarding} alt='onboarding' />
                    </Fade>
                </div>
            </div >
        </>
    )
}

export default Onboarding;