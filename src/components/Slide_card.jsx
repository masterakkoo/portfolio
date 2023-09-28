
import pro11 from "../photo/pro11.png"
import pro2 from "../photo/pro2.png"
import Footer from "../components/Footer"
import "../css/work.css"
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
function Slide_card(p) {
    return (
        <>
            <div className='slide-card'>
                <img src={p.image}></img>
                <h3>{p.heading}</h3>
            </div>
        </>
    )
}

export default Slide_card