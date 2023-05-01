import React from 'react'

function ChannelItem({item}) {
const {nazvy, cas, stopaz} = item

console.log(cas)

const length = Number(stopaz.substr(0, 3))

  return (
    <div className='channel-list__item' style={{width: length * 2}}>
      <div className='channel-list__item-content'>
        <p className='channel-list__item-name'>{nazvy.nazev}</p>
        <p className='channel-list__item-time'>{cas}</p>
      </div>
    </div>
  )
}

export default ChannelItem
