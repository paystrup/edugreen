// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import image from '../assets/images/deb8b5d23e114c4aeaefe857477cd740.jpg'

export default function BigCarousel() {
    return (
    <section className='carouselSection'>
        <Swiper
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide
                style={{  
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '30vh'
                }}
            >
                <div>
                    <p>BLOGPOST</p>
                    <h3>Indsæt titel her</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </section>
    );
};