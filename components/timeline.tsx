'use client'
import Link from 'next/link';
import TimelineItem from './timeline-item';
import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '@/contexts/scroll-context';
import moment from 'moment'

function Timeline() {
 

  const {scrollOptions} = useContext(ScrollContext)

  const classList = ['timeline__container']
  scrollOptions.isScrollingUp && classList.push('timeline__container--up-scroll')

  const [days, setDays] = useState([])
  // const [hours, setHours] = useState([])
  
  const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  console.log(hours)

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

    // for (let i = 7; i < 24; i++) {
    //   hours.push(i + ':00')
    // }
    // setHours(hours);
  }, [])

  if (!days || !hours) {
    return <div>loading...</div>
  }


  return (
    <div className={classList.join(' ')}>
      <div className='timeline dragscroll'>
          {days.map((item, index) => (
            <div key={index} className='timeline__item'>
              <Link href="#" className={index === (days.length/2 + 1) ? 'button-active' : ''}>{item}</Link>
            </div>
          )) }
      </div>
      {/* <div className='timeline__hours dragscroll syncscroll' name='channels'> */}
      <div className='timeline__hours dragscroll' name='channels'>
        {hours.map((item, index) => (
          <TimelineItem item={item} key={index} index={index} length={hours.length} />
        )) }
      </div>
    </div>
  )
}

export default Timeline
