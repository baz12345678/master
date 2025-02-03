import React from 'react'
import Header from '../components/header'
import Latestcollection from '../components/latestcollection'
import Bestsellers from '../components/bestsellers'
import Ourpolicy from '../components/ourpolicy'
import Newletter from '../components/newletter'

const Home = () => {
  return (
    <div>
      <Header/>
      <Latestcollection/>
      <Bestsellers/>
      <Ourpolicy/>
      <Newletter/>
    </div>
  )
}

export default Home
