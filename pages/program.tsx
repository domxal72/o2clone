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

  const [days, setDays] = useState([])
  const [hours, setHours] = useState([])
  
  useEffect(() =>{
    const nDays = 7 
    const days = [];
    for (let i = -nDays; i < nDays; i++) {
      const day = moment().add(i, 'days');
      const dayName = day.format('dd');
      const dayNum = day.format('D');
      const monthNum = day.format('M');
      days.push(`${dayName} ${dayNum}. ${monthNum}.`)
    }
    setDays(days);

    const nHours = 12 
    const hours = [];
    for (let i = -nHours; i < nHours; i++) {
      const hour = moment().add(i, 'hours').startOf('hour').format('h:mm');
      hours.push(hour)
    }
    setHours(hours);
  }, [])

  if (!days || !hours) {
    return <div>loading...</div>
  }


  return (
    <>
      <Timeline days={days} hours={hours} />
        <ChannelList program={program} />
      <Script src='https://cdn.jsdelivr.net/npm/sync-scroll@1.0.3/syncscroll.min.js'></Script>
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js'></Script>
    </>
  )
}

export default Program
