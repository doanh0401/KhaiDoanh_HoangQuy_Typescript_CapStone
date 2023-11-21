import React from 'react'
import Room from './components/Room/Room'
import Carousel from './components/Carousel/Carousel'

export default function Home() {
  return (
    <div>
      <div className="h-28"></div>
      <div className='container mx-auto'>
        <Carousel />
      </div>
      <div className='container mx-auto mt-10'>
        <Room />
      </div>
    </div>
  )
}
