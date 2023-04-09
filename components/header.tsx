import Image from 'next/image'
import Link from 'next/link'

import logo from 'assets/img/o2-logo.png'
import search from 'assets/img/search-icon.svg'
import account from 'assets/img/account-icon.svg'

const data = [
  'Program',
  'Nahrávky',
  'Sport',
  'Dětské',
  'Premium',
  'Videotéka',
]

function Header() {
  return (
    <header className="flex justify-between bg-primary">
      <div className='flex items-center gap-6'>
        <Image src={logo} alt='logo' width={65} height={65} />
        {data.map((item, index) => (
          <Link href='/' key={index} className='header__menu-item'>
            {item}</Link>
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
