import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Head from 'next/head'

const contact = () => {
  return (
    <>
    <Head>
      <title>Work</title>
    </Head>
    <div>
        <Hero heading='Contact' message='Submit the form below for more work and quotes.' />
        <Contact />
    </div>
    </>
  )
}

export default contact