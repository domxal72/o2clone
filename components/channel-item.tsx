import React from 'react'

function ChannelItem({item}) {
const {nazvy, cas, stopaz, datum, minutesLength, timeFormat} = item

const stickyOffsetLeft = 150

// const length = Number(stopaz.substr(0, 3)) * 5 +'px'
const length = minutesLength * 5 + 'px'
const [hour, minute] = cas.split(':')
// const left = (Number(hour) * 60 + Number(minute)) * 5 + 'px'
// const left = (timeFormat) * 5 + stickyOffsetLeft + 'px'
// const left = (timeFormat - minutesLength) * 5 + stickyOffsetLeft + 'px'
const left = (timeFormat) * 5 + stickyOffsetLeft + 'px'

// console.log(left, datum, nazvy)
// console.log(item, datum, nazvy)
console.log(item, minutesLength)

  return (
    <div className='channel-list__item' style={{width: length, minWidth: length, left }}>
    {/* <div className='channel-list__item' style={{ left }}> */}
      <div className='channel-list__item-content'>
        <p className='channel-list__item-name truncate'>{nazvy.nazev}</p>
        <p className='channel-list__item-time truncate'>{cas}</p>
      </div>
    </div>
  )
}

export default ChannelItem
