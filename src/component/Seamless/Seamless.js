import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import google_img_memate from "../../assets/img/google_img_memate.svg";
import paypal_img from "../../assets/img/paypal_img.svg";
import google_analytics_img from "../../assets/img/google_analytics_img.svg";
import stripe_img from "../../assets/img/stripe_img.svg";
import memate_business from "../../assets/img/memate_business.svg";
import asana_img from "../../assets/img/asana_img.svg";
import myob_img from "../../assets/img/myob_img.svg";
import xero_img from "../../assets/img/xero_img.svg";
import amazon_img from "../../assets/img/amazon_img.svg";

const Seamless = () => {

    return (
        <>
            <div className='memate_seamless'>
                <h3>Memate</h3>
                <div className='div_bg'>
                    <FadeIn>
                        <h1 className='gradient-text'>seamless
                            integration</h1>
                    </FadeIn>

                </div>
                <div className="seamless_section">
                    <div className="flex_container">
                        <div className='flex_column'>
                            <div className='d_flex'>
                                <div className="google_img">
                                    <img src={google_img_memate} alt="Google" />
                                </div>
                                <div className="google_img">
                                    <img src={paypal_img} alt="paypal_img" />
                                </div>
                            </div>
                            <div className='d_flex'>
                                <div className="google_img">
                                    <img src={google_analytics_img} alt="google_analytics_img" />
                                </div>
                                <div className="google_img">
                                    <img src={stripe_img} alt="stripe_img" />
                                </div>
                            </div>
                        </div>

                        <div className="memate_business_img">
                            <img src={memate_business} alt="memate_business" />
                        </div>

                        <div className='flex_column'>
                            <div className='d_flex'>
                                <div className="google_img">
                                    <img src={asana_img} alt="asana_img" />
                                </div>
                                <div className="google_img">
                                    <img src={myob_img} alt="myob_img" />
                                </div>
                            </div>
                            <div className='d_flex'>
                                <div className="google_img">
                                    <img src={xero_img} alt="xero_img" />
                                </div>
                                <div className="google_img">
                                    <img src={amazon_img} alt="amazon_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Seamless;