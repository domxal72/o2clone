import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import logo from '../public/img/o2-logo.png'
import search from '../public/img/search-icon.svg'
import account from '../public/img/account-icon.svg'
import {
  PROGRAM,
  PREMIUM,
  SPORT,
  DETSKE,
  NAHRAVKY,
  VIDEOTEKA
} from '../routes/routes'
import { useEffect } from 'react'

const data = [
  {
    name: 'Program',
    route: PROGRAM
  },
  {
    name: 'Nahrávky',
    route: NAHRAVKY
  },
  {
    name: 'Sport',
    route: SPORT
  },
  {
    name: 'Dětské',
    route: DETSKE
  },
  {
    name: 'Premium',
    route: PREMIUM
  },
  {
    name: 'Videotéka',
    route: VIDEOTEKA
  },
]

function Header() {

  useEffect(() =>{
    console.log('from effect')
  })

  console.log('from outside')

  const router = useRouter()

  return (
    <header className={`header flex justify-between bg-primary ${router.route === PROGRAM && 'header--relative'}`}>
      <div className='flex items-center gap-6'>
        <Image src={logo} alt='logo' width={65} height={65} />
        {data.map((item, index) => (
          <Link href={item.route} key={index} className='header__menu-item'>
            {item.name}</Link>
        ))}
      </div>
      <div className="flex">
        <Image src={search} alt='search icon' />
        <Image src={account} alt='account icon' />
      </div>
    </header>
  )
}

export default Header
