import React from 'react';
import bussines_owner from "../../assets/img/bussines_owner.svg";
import industries_boy from "../../assets/img/industries_boy.svg";
import bussines_work from "../../assets/img/bussines_work.svg";
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import FadeIn from 'react-fade-in/lib/FadeIn';

const SimplePowerfull = () => {

    return (
        <>
            <div className='simple_powerful'>
                <h2>Simple. Versatile. Powerful.</h2>
                <div className="img_content_section">
                    <div className="imgs_content">
                        <img src={bussines_owner} alt='bussines_owner' />
                        <p>To be used by ordinary<br /> business owners.</p>
                    </div>
                    <div className="imgs_content">
                        <img src={industries_boy} alt='industries_boy' />
                        <p>To suit 90% of all<br /> industries.</p>
                    </div>
                    <div className="imgs_content">
                        <img src={bussines_work} alt='bussines_work' />
                        <p>To change the perception<br /> of how business works.</p>
                    </div>
                </div>

                <div className='success_stories'>
                    <h3>Success Stories</h3>
                    <p>Here are a few stories from Australian companies using Memate
                        <br />  and how it has worked for them.
                    </p>
                    <div className='get_started_btn'>
                        <Button>Get started</Button>
                    </div>
                </div>

                <div className='slider_sec_two'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[Navigation, Pagination, Autoplay, FreeMode]}
                        breakpoints={{
                            240: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="imgs_content">
                                <img src={bussines_owner} alt='bussines_owner' />
                                <p>To be used by ordinary<br /> business owners.</p>
                                <h4>Apple, Palo Alto</h4>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='bottom_sec'>
                    <h5>Take the</h5>
                    <div className='div_bg'>

                        <FadeIn>
                            <h1 className='gradient-text'>next step</h1>
                        </FadeIn>

                    </div>
                    <div className='get_started_btn'>
                        <Button>Get started</Button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default SimplePowerfull;