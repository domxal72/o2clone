import React, { useEffect, useState } from 'react'
import ChannelItem from './channel-item'

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

function ChannelList() {

  const [program, setProgram] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:5000/program');
        const data = await res.json();
        setProgram(data.porad)
        console.log(data.porad)
      } catch (error) {
        console.log(error) 
      }
    })();
  }, [])

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
      <div className='channel-list'>
        {program.map((item, index) => (
          <ChannelItem item={item} key={index} />
        ))}
      </div>
    </>
  )
}

export default ChannelList
