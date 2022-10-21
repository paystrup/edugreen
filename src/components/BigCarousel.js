// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";

import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Pagination } from "swiper";
// linear-gradient(0deg, rgba(0,0,0,0.7651435574229692) 0%, rgba(107,121,9,0) 100%);

import { useNavigate } from "react-router-dom";

export default function BigCarousel({ posts }) {
  const navigate = useNavigate();

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.1}
      centeredSlides={true}
      grabCursor={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      // mousewheel={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Keyboard, Mousewheel, Pagination]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 1px
      1: {
      slidesPerView: 1.2,
      initialSlide: 1
      },
     // when window width is >= 768px
      960: {
      slidesPerView: 2,
      initialSlide: 1
      },
  }}
      
    >
      {posts.map((post) => (
        <SwiperSlide
          key={post.id}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.9248074229691877) 6%, rgba(0,0,0,0) 100%), url("${post._embedded["wp:featuredmedia"][0].source_url}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
          onClick={() => navigate("/blog/" + post.slug)}
        >
          <div>
            <div className="overlay"></div>
            <p className="font-describe-title font-padding">Blogpost</p>
            <h3 className="font-blog-big">{post?.acf?.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
