import React from 'react'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <Hero/>
        <Featured/>
        <Banner/>
        <Testimonials/>
        <Newsletter/>
    </>
  )
}

export default Home