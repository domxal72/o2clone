import Image from 'next/image'
import React from 'react'

import logo from '../public/img/o2-logo.png'
import fb from '../public/img/socials/facebook.png'
import tw from '../public/img/socials/twitter.png'
import inst from '../public/img/socials/instagram.png'
import o2 from '../public/img/socials/o2-icon.png'
import yt from '../public/img/socials/youtube.png'
import Link from 'next/link'

const data = [
  {
    link: "https://www.o2.cz/osobni/televize",
    img: fb,
  },
  {
    link: "https://www.o2.cz",
    img: o2,
  },
  {
    link: "https://www.instagram.com/o2tvsportcz/",
    img: inst,
  },
  {
    link: "https://www.youtube.com/c/O2CZ",
    img: yt,
  },
  {
    link: "https://twitter.com/o2_cz",
    img: tw,
  },
]

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__left">
        <Link href='/'>
          <Image src={logo} width={57} height={24} alt='footer logo' className='footer__link footer__link--logo' />
        </Link>
        {data.map(({link, img}, index) => (
          <Link href={link} key={index} target='_blank'>
            <Image
              src={img}
              width={34}
              height={34}
              alt='footer social link'
              className='footer__link'
            />
          </Link>
        ))}
      </div>
      <div className="footer__right">
        <Link href="https://www.o2.cz/osobni/soukromi" target='_blank'>
          <span className="footer__link hover:underline">Ochrana soukromí</span>
        </Link>
        <div className="opacity-70">|</div>
        <Link href="http://www.o2.cz/o2tv" target='_blank'>
          <span className="footer__link hover:underline">Podmínky</span>
        </Link>
        <p className="footer__copy">
          O2 clone - Next.js test project
        </p>
      </div>
    </div>
  )
}

export default Footer
