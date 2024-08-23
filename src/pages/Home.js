import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "../page.css";
import image1 from "../images/home-background.jpg";
import image2 from "../images/homebackground2.jpg";
import image3 from "../images/test1.jpg";

export default function Home() {
    return (
    <>
        <div className="bg">
            <h1 className="bold">KNOWING CHRIST</h1>
            <h1>and making him known</h1>
        </div>


        <div className="events">
            <h1 className="heading">Events</h1>
            <div className="swiper-container">
                <Swiper
                spaceBetween={20}
                
                
                loop={true}
                grabCursor={true}
                pagination={
                    {el: '.swiper-pagination', clickable:true}
                }
                navigation={{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                    clickable:true,
                }}
                
                modules={[EffectCoverflow,Pagination,Navigation]}

                breakpoints={
                    {
                        0: {slidesPerView:1},
                        620: {slidesPerView:2},
                        1024: {slidesPerView:3},
                    }
                }
                
                >
                    <SwiperSlide>
                        <div className="event-card">
                            <img src={image1} alt="image"/>
                            <p>Event Name</p>
                            <p className="date">Date</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event-card">
                            <img src={image1} alt="image"/>
                            <p>Event Name</p>
                            <p className="date">Date</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event-card">
                            <img src={image1} alt="image"/>
                            <p>Event Name</p>
                            <p className="date">Date</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event-card">
                            <img src={image1} alt="image"/>
                            <p>Event Name</p>
                            <p className="date">Date</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="event-card">
                            <img src={image1} alt="image"/>
                            <p>Event Name</p>
                            <p className="date">Date</p>
                        </div>
                    </SwiperSlide>

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </Swiper>
            </div>
        </div>
    </>
    );
}