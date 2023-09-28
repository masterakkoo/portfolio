import pro11 from "../photo/pro11.png"
import pro2 from "../photo/pro2.png"
import pro3 from "../photo/Screenshot 2023-09-16 162150.png"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Project_slider() {
    return (
        <>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className="first">
                    <img src={pro3} alt="" />
                </div>
                    <div className="second">
                        <span>PROJECT 01(E-commerce)</span>
                        <ul>
                            <li>I have created this e-commerce webiste by using reactjs and javascript for frontend , nodejs , expressjs for backend
                                and mongodb for database and use razorpay for payment gateway.
                            </li>
                            <li> This website consist of many smartphones,audio
                                products and smart watch with different options like sort, order, add to cart, review, check your order and many
                                more.</li>
                            <li>Provides very easy to use UI.
                            </li>
                        </ul>

                    </div></SwiperSlide>
                <SwiperSlide><div className="first">
                    <img src={pro2} alt="" />
                </div>
                    <div className="second">
                        <span>PROJECT 02(Wheather website)</span>
                        <ul>
                            <li> Created this website to show the Wheather of a location.
                            </li>
                            <li>I used html,css,javascipt and nodejs to create this website and fetch Wheather details from a API .</li>

                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="first">
                    <img src={pro11} alt="" />
                </div>
                    <div className="second">
                        <span>PROJECT 03</span>
                        <ul>
                            <li> Created this website to show top Korean dramas of all time.
                            </li>
                            <li> Implemented Jsx,CSS and ReactJs to create this website.</li>
                            <li> Each Drama is provided with its streaming link.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="first">
                    <img src={pro2} alt="" />
                </div>
                    <div className="second">
                        <span>PROJECT 01</span>
                        <ul>
                            <li> Created this website to show top Korean dramas of all time.
                            </li>
                            <li> Ito create this website.</li>
                            <li> Each Drama is provided with its streaming link.
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
