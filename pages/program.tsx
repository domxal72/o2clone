import { useEffect, useState, useRef } from 'react';
import Script from 'next/script'
import 'moment/locale/cs'
import moment from 'moment'
// import syncscroll from 'sync-scroll'
// import dragscroll from 'dragscroll'

import Timeline from '../components/timeline'
import ChannelList from '@/components/channel-list';

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:3000/api/program')
  const data = await res.json()

  return {
    props: data
  }
}

function Program({program}) {

  return (
    <>
      <Timeline />
        <ChannelList program={program} />
      <Script src='https://cdn.jsdelivr.net/npm/sync-scroll@1.0.3/syncscroll.min.js'></Script>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js'></Script>
    </>
  )
}

export default Program
