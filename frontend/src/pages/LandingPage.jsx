import React from 'react'
import ImageCarousel from '../components/navbar/landingPage/ImageCarousel'
import Welcome from '../components/navbar/landingPage/Welcome'

function LandingPage() {
  return (
    <div className='h-[calc(100vh-56px)] overflow-y-hidden'>
        <ImageCarousel/>
        <Welcome />
    </div>
  )
}

export default LandingPage