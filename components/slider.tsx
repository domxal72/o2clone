import Image from 'next/image';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import info from '../public/icons/info.svg'
import cart from '../public/icons/cart.svg'
import csfdLogo from '../public/icons/csfd.svg'

function Slider({
  sliderData = [],
  wrapperClass = '',
  slideSize = 'sm',
  imageWidth = 460,
  imageHeight = 250,
  isCategory = false,
  slidesPerGroup = 1,
  slidesPerGroupAuto = true,
  slidesPerView = 'auto',
  openModal
}) {

  return (
      <div className={'slider-wrapper ' + wrapperClass}>
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          slidesPerGroupAuto={slidesPerGroupAuto}
          navigation
          modules={[Navigation]}
        >
          {sliderData.map(({title, imgSrc, csfd}, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <div className={'slide slide--' + slideSize} onClick={() => {openModal({title, imgSrc, csfd})}}>
                <div className="slide__img-container">
                  <Image
                    src={`/img/${imgSrc}.png`}
                    alt="image"
                    width={imageWidth}
                    height={imageHeight}
                    className='slide__img'
                  />
                  {!isCategory && (
                    <div className="slide__csfd-rating">
                      <Image src={csfdLogo} alt="csfd" width={40} height={20} />
                      <span>{csfd}%</span>
                    </div>
                  )}
                </div>
                <div className='slide__title truncate'>{title}</div>
                <div className='slide__title-hover'>
                  <p className='line-clamp-2 leading-4'>{title}</p>
                  {!isCategory && (
                    <div className='slide__title-icon'>
                      <Image src={info} alt="info" width={24} height={24} />
                    </div>
                  )}
                </div>
                {!isCategory && (
                  <div className='slide__cart-icon'>
                    <Image src={cart} alt="cart" width={20} height={20} />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default Slider
