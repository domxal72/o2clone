import {useEffect} from "react"
import Link from "next/link"

function TimelineItem({item, index, length}) {

useEffect(() =>{
  const timelineHours = document.querySelector('.timeline__hours .timeline__hours--now')
  if(timelineHours){
    timelineHours.scrollIntoView({
      block: 'nearest',
      behavior: 'auto',
      inline: 'center'
  });
  }

}, [])


  return (
    <div className='timeline__hours-item'>
      <Link
        href="#"
        className={index === (length/2 + 1) ? 'timeline__hours--now' : ''}
      >
        {item + ':00'}
      </Link>
    </div>
  )
}

export default TimelineItem
