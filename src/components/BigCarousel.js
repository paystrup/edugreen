// Import Swiper React components - https://swiperjs.com/
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Pagination } from "swiper";

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
      // mousewheel={true} // scroll to navigate
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
          initialSlide: 1,
        },
        // when window width is >= 768px
        960: {
          slidesPerView: 2,
          initialSlide: 1,
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
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={() => navigate("/blog/" + post.slug)}
        >
          <div>
            <div className="overlay"></div>
            <p className="font-describe-title font-padding blogpostText">
              Blogpost
            </p>
            <h3 className="font-blog-big">{post?.acf?.title}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
