import React from 'react'

function SportRender({data, setData = null}) {

  const {title} = data

  return (
    <div>{title}</div>
  )
}

export default SportRender
