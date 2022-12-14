import React from 'react'
import Head from 'next/head';
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Slider from '../components/Slider'

const work = () => {
  return (
      <div>
    <Head>
      <title>Work</title>
    </Head>
      <Hero heading='My Work' message='These are some of my recent work touring the computer world.' />
      <Slider/>
        <Portfolio />
    </div>
  )
}

export default work