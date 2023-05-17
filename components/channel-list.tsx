import React, { useEffect, useState } from 'react'
import ChannelItem from './channel-item'
import Image from 'next/image'

import ct1 from '../public/img/channels/ct1.png'

const data = [
  {
    nazvy: {
      nazev: 'Hřmot obřího plaza aneb teď poznáte Hadimršku'
    },
    cas: '19:00',
    stopaz: '060',
  },
  {
    nazvy: {
      nazev: 'Cesta do Ameriky'
    },
    cas: '20:00',
    stopaz: '090',
  },
  {
    nazvy: {
      nazev: 'Conan'
    },
    cas: '21:30',
    stopaz: '120',
  },
  {
    nazvy: {
      nazev: 'Mock'
    },
    cas: '23:30',
    stopaz: '520',
  },
]

function ChannelList({program}) {

  // filter one day from data API
  const dayFilter = program.porad.filter((item) => (item.datum === '2023-04-09'))

  // for( let i = 0; i < dayFilter.length; i++){
  //   const [hour, minute] = dayFilter[i].cas.split(':')
  //   const timeFormat = (Number(hour) * 60 + Number(minute)) - 300
  //   dayFilter[i].timeFormat = i === 0 ? 5 : timeFormat
  //   dayFilter[i].minutesLength = i === 0 ? 5 : (timeFormat - (dayFilter[i - 1]?.timeFormat))
  //   console.log(dayFilter[i].timeFormat, dayFilter[i].minutesLength)
  // }

  for( let i = 0; i < dayFilter.length - 2; i++){
    const [hour, minute] = dayFilter[i].cas.split(':')
    const [hourNext, minuteNext] = dayFilter[i + 1].cas.split(':')
    dayFilter[i].timeFormat = Number(hour) * 60 + Number(minute)
    dayFilter[i].minutesLength = (Number(hourNext) * 60 + Number(minuteNext)) - (Number(hour) * 60 + Number(minute))
    console.log(dayFilter[i].timeFormat, dayFilter[i].minutesLength)
  }

  if(!program){
    return <div>loading program</div>
  }

  return (
    <>
      <div className='channel-list dragscroll syncscroll' name='channels'>
        {data.map((item, index) => (
          <ChannelItem item={item} key={index} />
        ))}

      </div>
      <div className='channel-list dragscroll syncscroll' name='channels'>
        <div className='channel-list__channel'>
          <span className='opacity-50'>1</span>
          <Image src={ct1} alt='ct1' width={71} height={40} className='max-w-none m-auto' />
        </div>
        {dayFilter.map((item, index) => (
          <ChannelItem item={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default ChannelList
