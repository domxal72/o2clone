import {useEffect} from 'react'

function ChannelItem({item}) {

  const {nazvy, cas, minutesLength, timeFormat, now} = item

  const stickyOffsetLeft = 150

  const length = minutesLength * 5 + 'px'
  const left = (timeFormat) * 5 + stickyOffsetLeft + 'px'

  useEffect(() =>{
    const timelineHours = document.querySelector('.channel-list .channel-list__item--now')
    if(timelineHours){
      timelineHours.scrollIntoView({
        block: 'nearest',
        behavior: 'auto',
        inline: 'center'
    });
    }
  
  }, [])

  const classList = ['channel-list__item']
  now && classList.push('channel-list__item--now')

  console.log(now)

  return (
    <div className={classList.join(' ')} style={{width: length, minWidth: length, left }}>
      <div className='channel-list__item-content'>
        <p className='channel-list__item-name truncate'>{nazvy.nazev}</p>
        <p className='channel-list__item-time truncate'>{cas}</p>
      </div>
    </div>
  )
}

export default ChannelItem
