import { Open_Sans } from 'next/font/google'
import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import Header from './header'
import Footer from '@/components/footer'
import ScrollContextProvider from '@/contexts/scroll-context'

const openSans = Open_Sans(
  {
    subsets: ['latin'],
  },
)


function Layout({ children }) {

  const router = useRouter()
  const [scrollOptions, setScrollOptions] = useState({scrollY: 0, isScrollingUp: false})

  const handleScroll = () => {
    setScrollOptions((scrollOptions) => (
      {
        ...scrollOptions,
        scrollY: window.scrollY,
        isScrollingUp: (window.scrollY < scrollOptions.scrollY)
      }))
  }

  useEffect(() => {
    if((typeof window !== 'undefined')){
      window.addEventListener("scroll", handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  
  return (
    <ScrollContextProvider>
      <div className={openSans.className}>
        <Header scrollOptions={scrollOptions} pageRoute={router.route} />
        <main>{children}</main>
        <Footer />
      </div>
    </ScrollContextProvider>
  )
}

export default Layout
