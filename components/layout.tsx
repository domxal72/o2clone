import { Open_Sans } from 'next/font/google'
import Script from 'next/script'
import syncscroll from 'sync-scroll'

import Header from './header'
// import syncscroll from '../assets/scripts/syncscroll'

const roboto = Open_Sans({
  weight: '300',
  subsets: ['latin'],
})

'use client'
function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <Header />
      <main>{children}</main>
      <div className="flex">
        <div className="cont syncscroll" name="elune">
          <div className="content"></div>
        </div>
        <div className="cont syncscroll" name="elune">
          <div className="content">
          </div>
        </div>
      </div>
      <div className="hor dragscroll"><div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis blanditiis repellendus recusandae quaerat sequi hic quos animi iure commodi amet omnis eum sed saepe quae laudantium, esse reiciendis odio?
        </div>  </div>
      {/* <Script src={syncscroll}></Script> */}
      <Script src='https://cdn.jsdelivr.net/npm/sync-scroll@1.0.3/syncscroll.min.js'></Script>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js'></Script>
    </div>
  )
}

export default Layout
