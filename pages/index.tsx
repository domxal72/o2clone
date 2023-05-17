import Image from 'next/image'
import { Inter } from 'next/font/google'
// import videoSrc from '../public/video/ducks.mp4'
import ReactPlayer from 'react-player'
import ct1 from '../public/img/channels/ct1.png'
import Button from '@/components/button'
import Slider from '@/components/slider';
import play from '../public/icons/play.svg'
import info from '../public/icons/info.svg'

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/home')
  const data = await res.json()

  return {
    props: data
  }
}

export default function Home({live, watch}) {
  return (
    <div className="home">
      <div className="home__video-bg">
        <ReactPlayer
          url='https://www.youtube.com/watch?v=GhOaS5Aa1mw&ab_channel=lladdak'
          width='100%'
          height='100%'
          playing
          volume={0}
        />
        <div className="home__video-overlay"></div>
      </div>
      <div className="home__live">
        <div className="home__live-top"></div>
        <div className="home__live-bottom">
          <div className="home__live-title">
            Home live program
          </div>
          <div className="home__live-description">
            Home live program description
          </div>
          <div className="home__live-timeline">
          
          </div>

          <div className="home__live-channel-wrapper">
            <div className="home__live-channel">
              <Image src={ct1} alt='ct1' width={100} />
            </div>
            <div className="home__live-time colors-dark-hour">
              14:15
            </div>
          </div>
          <div className="home__live-buttons">
            <Button icon={play} classes='button button--primary'>
              Přehrát
            </Button>
            <Button icon={info} classes='button'>
              Info
            </Button>
          </div>
        </div>
      </div>
      <Slider sliderData={live} />
      <div className="videoteque__title">Sledujte v O2 TV</div>
      <Slider sliderData={watch} slideSize='lg' />
    </div>
  )
}
