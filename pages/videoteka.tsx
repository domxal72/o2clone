import 'swiper/css';
import 'swiper/css/navigation';
import Slider from '@/components/slider';

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/videoteka')
  const data = await res.json()

  return {
    props: data
  }
}

function Videoteka({hits, recomend, best, category, adult}) {

  return (
    <div className='videoteka'>
      <div className='videoteka__title'>Hity O2 Videotéky</div>
      <Slider sliderData={hits} slideSize='lg' />
      <div className='videoteka__title'>O2 TV doporučuje</div>
      <Slider sliderData={recomend} />
      <div className='videoteka__title'>Nejlepší filmy</div>
      <Slider sliderData={best} />
      <div className='videoteka__title'>Kategorie</div>
      <Slider sliderData={category} slideSize='md' isCategory />
      <div className='videoteka__title'>Pro dospělé</div>
      <Slider sliderData={adult} slideSize='xl' isCategory />
    </div>
  )
}

export default Videoteka


