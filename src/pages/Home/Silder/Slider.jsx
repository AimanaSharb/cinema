import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";

import "swiper/css";
import "swiper/css/navigation"

import image from '../../../assets/slide.jpg'

const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="sliderSwiper"
                >
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src={image} alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slider__block">
                            <img src={image} alt="" className="slider__block-img"/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Slider;