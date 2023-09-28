import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Card2data from './Card2data';
import Slide_card from './Slide_card';
import '../css/slider.css'
export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <div className="neww1">
                {Card2data.map((va) => {
                    return (
                        <SwiperSlide>
                            <Slide_card
                                index={va.index}
                                heading={va.heading}
                                data={va.data}
                                image={va.image}

                            /></SwiperSlide>);
                })}

            </div>


            ...
        </Swiper>
    );
};