import Link from 'next/link';
import TimelineItem from './timeline-item';
import { useContext } from 'react';
import { ScrollContext } from '@/contexts/scroll-context';

function Timeline({days, hours}) {

  const {scrollOptions} = useContext(ScrollContext)

  const classList = ['timeline__container']
  scrollOptions.isScrollingUp && classList.push('timeline__container--up-scroll')

  return (
    <div className={classList.join(' ')}>
      <div className='timeline dragscroll'>
          {days.map((item, index) => (
            <div key={index} className='timeline__item'>
              <Link href="#" className={index === (days.length/2 + 1) ? 'button-active' : ''}>{item}</Link>
            </div>
          )) }
      </div>
      <div className='timeline__hours dragscroll syncscroll' name='channels'>
        {hours.map((item, index) => (
          <TimelineItem item={item} key={index} index={index} length={hours.length} />
        )) }
      </div>
    </div>
  )
}

export default Timeline
