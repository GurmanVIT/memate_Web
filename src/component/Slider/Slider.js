import React from 'react';
import sky_news from '../../assets/img/sky-news-australia-seeklogo 1.svg';
import the_australian from '../../assets/img/the_australian.svg';
import abc_img from '../../assets/img/abc_img.svg';
import the_guardian from '../../assets/img/the_guardian.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const Slider = () => {


    return (
        <div className='slider_sec'>
            <h3>Featured on:</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                modules={[Navigation, Autoplay, FreeMode]}
                breakpoints={{
                    240: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 3,
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
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sky_news} alt='sky_news' />

                </SwiperSlide>

                <SwiperSlide>
                    <img src={the_australian} alt='the_australian' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={abc_img} alt='abc_img' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={the_guardian} alt='the_guardian' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider