'use client';
import Link from 'next/link';
import TimelineItem from './timeline-item';

function Timeline({days, hours}) {

  return (
    <div className='sticky top-0 z-10 bg-dark'>
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
