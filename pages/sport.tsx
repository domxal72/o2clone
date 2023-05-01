import React from 'react'

import SportRender from '@/components/sport-render'
import Page from '@/components/page'

function Sport() {
  return (
    <Page
      dataUrl='https://jsonplaceholder.typicode.com/todos/1'
      Component={SportRender}
    />
  )
  // return <Page dataUrl='https://jsonplaceholde.typicode.com/todos/1' Component={SportRender} />
}

export default Sport
