import React from 'react';
import content_img from '../../assets/img/Macbook Pro mockup.svg';
import iphone_img from '../../assets/img/iPhone mockup.svg';
import { Button } from 'react-bootstrap';

const Business = () => {

    return (
        <>
            <div className='business'>
                <h2>Business management cloud softwate.</h2>
                <h2>All-in-One Platform</h2>

                <h1 class="gradient-text">to run your <br /> business</h1>
                <div className='d_flex'>
                    <div className='content_img'>
                        <img src={content_img} alt='content_img' />
                    </div>

                    <img src={iphone_img} alt={iphone_img} className='iphone_img' />
                </div>
                <div className='text_margin'>
                    <h3>Easy-to-Use Business Management Software: Australia's #1</h3>
                    <h3>Application to Start, Run, and Succeed in Your Business</h3>
                    <p>Made for Small to Medium Businesses for Simplicity and Order</p>
                </div>

                <div className='request_btn'>
                    <Button>Request a Demo</Button>
                </div>

            </div>
        </>
    )
}

export default Business;