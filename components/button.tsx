import Image from 'next/image'
import React from 'react'

function Button({icon, classes='button', children}) {
  return (
    <button className={classes}>
      {icon && <Image src={icon} alt='icon' />}
      {children}
    </button>
  )
}

export default Button
