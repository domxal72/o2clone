import {useState} from 'react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from '@/components/slider';
import Button from '@/components/button';
import Image from 'next/image';
import csfdLogo from '../public/icons/csfd.svg'
import cart from '../public/icons/cart.svg'

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/videoteque')

  const data = await res.json()

  return {
    props: data
  }
}

function Videoteque({hits, recomend, best, category, adult}) {

  const initState = {
    title: '',
    imgSrc: '',
    csfd: '',
  }
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(initState);
  const [fullDescription, setFullDescription] = useState(false);

  function openModal(modalContent){
    setIsOpen(true)
    setModalContent(modalContent)
  }

  function handleCloseModal(){
    setIsOpen(false)
    setFullDescription(false)
  }

  function handleDescription(){
    setFullDescription(true)
  }

  const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla illum libero ipsam ipsa unde, repellat vel placeat aut accusamus nesciunt a culpa, assumenda quas corrupti eligendi? Est id non voluptatum fugit optio quod, harum molestias neque quas impedit officiis debitis aspernatur, placeat aliquid quos nobis voluptatem? Dolores quas quae officiis veritatis sed voluptate nemo, tenetur dignissimos quod, maxime quia ut at voluptatibus exercitationem! Assumenda ullam perspiciatis similique autem tenetur quidem id dolorum officia laudantium dicta nulla ipsa culpa esse neque explicabo, inventore magnam adipisci blanditiis eveniet repellat laboriosam dolores. Harum, est ut ipsam quibusdam amet at beatae labore reiciendis tempore porro veritatis non delectus, earum sunt asperiores autem iste numquam expedita, eum dolore nemo aspernatur magni. Porro nemo fugiat expedita ratione laborum veniam necessitatibus vel mollitia eaque, eos illo natus laboriosam accusantium quo excepturi.'


  return (
    <div className='videoteque'>
      <div className='videoteque__title'>Hity O2 Videotéky</div>
      <Slider sliderData={hits} slideSize='lg' openModal={openModal} />
      <div className='videoteque__title'>O2 TV doporučuje</div>
      <Slider sliderData={recomend} openModal={openModal} />
      <div className='videoteque__title'>Nejlepší filmy</div>
      <Slider sliderData={best} openModal={openModal} />
      <div className='videoteque__title'>Kategorie</div>
      <Slider sliderData={category} slideSize='md' isCategory openModal={openModal} />
      <div className='videoteque__title'>Pro dospělé</div>
      <Slider sliderData={adult} slideSize='xl' isCategory openModal={openModal} />
      <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={true}
          className="modal-video"
          overlayClassName="modal-video__overlay"
          onRequestClose={handleCloseModal}
        >
          <div className='modal-video__content'>
            <div className="modal-video__bg" style={{backgroundImage: `url(/img/${modalContent.imgSrc}.png)`}}></div>
            <button className='modal-video__close' onClick={handleCloseModal}>X</button>
            <div className="flex justify-between relative">
              <div className="modal-video__left">
                <div className="modal-video__badge">
                  HD
                </div>
                <div className="modal-video__title">{modalContent.title}</div>
                <div className="modal-video__genre">
                  <span className="modal-video__genre-item">Drama, Hudební</span>
                  <span className="modal-video__genre-item">2022</span>
                  <span className="modal-video__genre-item">US</span>
                  <span className="modal-video__genre-item">152m</span>
                </div>
                <div className="modal-video__description">
                  {fullDescription ? description : description.slice(0,250) + '...'}
                  {!fullDescription && (
                    <button className='modal-video__description-more' onClick={handleDescription}>
                      Více
                    </button>
                  )}
                </div>
                <div className="modal-video__csfd-rating">
                  <Image src={csfdLogo} alt="csfd" width={40} height={20} />
                  <span>{modalContent.csfd}%</span>
                </div>
                <Button icon={cart} classes='button button--primary'>
                  Půjčit za 79 kč
                </Button>
              </div>
              <div className="modal-video__right">
                <Image src={`/img/${modalContent.imgSrc}.png`} width={333} height={500} alt='image' />
              </div>
            </div>
          </div>
        </Modal>
    </div>
  )
}

export default Videoteque


