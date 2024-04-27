import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay, EffectCreative } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner font-nunito">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
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
          <div className="bg-[url('/image.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-black md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Explore the World of Painting and Drawing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/imageb.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white text-center md:text-6xl text-4xl font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Discover the Joy of Artistry and Dive into Painting and Drawing
              with Our Expert Guidance
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/imagec.jpg')] min-h-screen bg-cover bg-no-repeat flex items-center justify-center">
            <h1 className=" text-white md:text-6xl text-4xl text-center font-nunito max-w-screen-xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Elevate Your Skills in Painting and Drawing with Our Inspirational
              Resources
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
      <h1 className="text-5xl text-center p-4">
        Art categories : &nbsp;
        <span className="text-gray-500">
          <Typewriter
            words={[
              "Landscape Painting",
              " Portrait Drawing",
              " Watercolor Painting",
              "Oil Painting",
              "Charcoal Sketching",
              "Cartoon Drawing",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Banner;
