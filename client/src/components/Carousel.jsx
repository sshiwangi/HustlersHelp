
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default function Carousel () {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='w-1/2'
    >
      <SwiperSlide><img src="https://picsum.photos/500/600" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos/500/600" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos/500/600" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://picsum.photos/500/600" alt="" /></SwiperSlide>
    </Swiper>
  );
};