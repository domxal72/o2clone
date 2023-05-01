import React from 'react'
import useFetch from '../customHooks/use-fetch'
import Loading from '@/components/loading'
import Error from './error'

function Page({dataUrl, Component}) {

  const {data, setData, loading, error} = useFetch(dataUrl)
  
  if (loading){
    return <Loading />
  }

  if (error){
    return <Error error={error} />
  }

  if (data){
    return (
      <Component data={data} setData={setData} />
    )
  }
}

export default Page
