import React from 'react'

import './style.scss'
import HeroBanner from './herobanner/herobanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './toprated/TopRated'
const Home = () => {
  return (
    <div className='homepage'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  )
}

export default Home