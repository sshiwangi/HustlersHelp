import React from 'react';
import { PropTypes } from 'prop-types'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'


const Carousel = ({ elements }) => {
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className='flex items-center justify-center gap-6'>
            <button ref={navigationPrevRef} className="btn btn-circle btn-primary">
                <MdOutlineArrowBackIos className='text-3xl text-base-100' />
            </button>
            <Swiper
                className='flex items-center justify-center py-6'
                modules={[Navigation]}
                navigation={{
                    disabledClass: 'disabled',
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                spaceBetween={10}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={() => {}}
            >
                {elements.map((element, i) => <SwiperSlide key={i} ><div className='flex items-center justify-center'>{element}</div></SwiperSlide>)}
            </Swiper>
            <button ref={navigationNextRef} className="btn btn-circle btn-primary">
                <MdOutlineArrowForwardIos className='text-3xl text-base-100' />
            </button>
        </div>
    )
}

Carousel.propTypes = {
    elements: PropTypes.array
}

export default Carousel