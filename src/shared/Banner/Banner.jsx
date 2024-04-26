import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-creative';
import "swiper/css/pagination";


// import required modules
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
         grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="mySwiper"
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="bg-[url('/image.jpeg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className="text-black text-6xl font-nunito ">explicit Art collection</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/imageb.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
          <h1 className="text-white text-6xl font-nunito ">explicit Art collection</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/imagec.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
          <h1 className="text-white text-6xl font-nunito ">explicit Art collection</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
