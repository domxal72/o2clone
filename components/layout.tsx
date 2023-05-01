import { Open_Sans } from 'next/font/google'
import { useState, useContext } from 'react'

import Header from './header'

const roboto = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})


function Layout({ children }) {

  const [scrollTop, setScrollTop] = useState({value: 0, goesDown: false})
  // useContext()

  const toggleHeader = (e) => {
    setScrollTop((scrollTop) => {
      if(e.target.scrollTop - scrollTop.value > 0){
        console.log('down')
        return {value: e.target.scrollTop, goesDown: true}
      } else {
        console.log('up')
        return {value: e.target.scrollTop, goesDown: false}
      }
    })
    // e.target
    // console.log(e.target.scrollTop)
    // console.log('scr')
  }
  

  return (
      <div className={roboto.className} onScroll={toggleHeader}>
      {/* <div className={roboto.className} onClick={toggleHeader}> */}
        <Header scrollTop={scrollTop} />
        <main className='main' onScroll={toggleHeader}>{children}</main>
      </div>
  )
}

export default Layout
