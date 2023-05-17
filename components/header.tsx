import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import logo from '../public/img/o2-logo.png'
import search from '../public/img/search-icon.svg'
import account from '../public/img/account-icon.svg'
import {
  HOME,
  PROGRAM,
  PREMIUM,
  SPORT,
  DETSKE,
  NAHRAVKY,
  VIDEOTEQUE
} from '../routes/routes'

const data = [
  {
    name: 'Home',
    route: HOME
  },
  {
    name: 'Program',
    route: PROGRAM
  },
  // {
  //   name: 'Nahrávky',
  //   route: NAHRAVKY
  // },
  // {
  //   name: 'Sport',
  //   route: SPORT
  // },
  // {
  //   name: 'Dětské',
  //   route: DETSKE
  // },
  // {
  //   name: 'Premium',
  //   route: PREMIUM
  // },
  {
    name: 'Videotéka',
    route: VIDEOTEQUE
  },
]

function Header({scrollOptions, pageRoute}) {

  const router = useRouter()
  const fixedPages = ['/', SPORT, DETSKE,]
  const classList = ['header']
  scrollOptions.scrollY === 0 && classList.push('header--transparent')
  scrollOptions.isScrollingUp && pageRoute === PROGRAM && classList.push('header--up-scroll')
  router.route === PROGRAM && classList.push('header--relative')
  fixedPages.includes(router.route) && classList.push('header--fixed')

  return (
    <header className={classList.join(' ')} >
      <div className='flex items-center gap-6'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={65} height={65} className='header__menu-item' />
      </Link>
      {data.map((item, index) => (
        <Link href={item.route} key={index} className='header__menu-item'>
          {item.name}
        </Link>
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
