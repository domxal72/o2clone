
// import Image from 'next/image';
import { Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


function VideotekaClient({hits, recomend}) {

//   const [slides, setSlides] = useState<'auto' | number>(1)

// useEffect(() => {
//   setSlides('auto')
// }, [])

  return (
    <div>
        <Swiper
          spaceBetween={10}
          // slidesPerView={slides}
          // slidesPerView={1}
          // slidesPerView={5.2}
          slidesPerView='auto'
          // slidesPerGroup={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          modules={[Navigation, Virtual]}
          // virtual
        >
          {hits.map(({title, imgSrc, csfd}, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className='swiper__slide'>
                {/* <Image
                  src={`/img/${imgSrc}.png`}
                  alt="image"
                  width={460}
                  height={260}
                  className='slide__slide-img'
                /> */}
                <div>{title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default VideotekaClient
