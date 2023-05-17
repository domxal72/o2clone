import 'swiper/css';
import 'swiper/css/navigation';
import Slider from '@/components/slider';

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/videoteque')

  const data = await res.json()

  return {
    props: data
  }
}

function Videoteque({hits, recomend, best, category, adult}) {

  return (
    <div className='videoteque'>
      <div className='videoteque__title'>Hity O2 Videotéky</div>
      <Slider sliderData={hits} slideSize='lg' />
      <div className='videoteque__title'>O2 TV doporučuje</div>
      <Slider sliderData={recomend} />
      <div className='videoteque__title'>Nejlepší filmy</div>
      <Slider sliderData={best} />
      <div className='videoteque__title'>Kategorie</div>
      <Slider sliderData={category} slideSize='md' isCategory />
      <div className='videoteque__title'>Pro dospělé</div>
      <Slider sliderData={adult} slideSize='xl' isCategory />
    </div>
  )
}

export default Videoteque


