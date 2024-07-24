import React, { useState } from 'react';
import sale_img from '../../assets/img/sale_img.svg'
import trading_img from '../../assets/img/trading_img.svg'
import { Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import FadeIn from 'react-fade-in/lib/FadeIn';

const Tabs = () => {

    const [active, setActive] = useState(0);

    return (
        <>
            <div className='tab_sec'>
                <h2>One application</h2>

                <FadeIn>
                    <h1 className='gradient-text'>to replace<br />them all</h1>
                </FadeIn>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[Navigation, Autoplay, FreeMode]}
                    breakpoints={{
                        240: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 9,
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
                        <div className='img_content' onClick={() => setActive(0)}
                            style={{
                                padding: 8,
                                borderRadius: active === 0 ? "10px" : "0",
                                border: active === 0 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 0 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(1)}
                            style={{
                                padding: 6,
                                borderRadius: active === 1 ? "10px" : "0",
                                border: active === 1 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 1 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(2)}
                            style={{
                                padding: 6,
                                borderRadius: active === 2 ? "10px" : "0",
                                border: active === 2 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 2 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(3)}
                            style={{
                                padding: 6,
                                borderRadius: active === 3 ? "10px" : "0",
                                border: active === 3 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 3 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(4)}
                            style={{
                                padding: 6,
                                borderRadius: active === 4 ? "10px" : "0",
                                border: active === 4 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 4 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(5)}
                            style={{
                                padding: 6,
                                borderRadius: active === 5 ? "10px" : "0",
                                border: active === 5 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 5 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(6)}
                            style={{
                                padding: 6,
                                borderRadius: active === 6 ? "10px" : "0",
                                border: active === 6 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 6 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(7)}
                            style={{
                                padding: 6,
                                borderRadius: active === 7 ? "10px" : "0",
                                border: active === 7 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 7 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='img_content' onClick={() => setActive(8)}
                            style={{
                                padding: 6,
                                borderRadius: active === 8 ? "10px" : "0",
                                border: active === 8 ? "4px solid #FFB258" : "4px solid transparent",
                                height: '100px',
                                width: '100%',
                                color: active === 8 ? "#757B8A" : "#000",
                            }}
                        >
                            <img src={sale_img} alt='sale_img' />
                            <h6>Sales</h6>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {active === 0 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 1 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 2 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 3 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 4 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 5 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 6 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 7 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }
                {active === 8 ?
                    <img src={trading_img} alt='trading_img' />
                    : ""
                }

                <h4 className='managementStyle'>Management</h4>
                <p className='manage_para'>See all ongoing projects on one screen with unparalleled visibility and functionality.</p>
                <div className='find_btn'>
                    <Button>Find more</Button>
                </div>
            </div >
        </>
    )
}

export default Tabs;