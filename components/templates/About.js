import Image from 'next/image'
import React from 'react'
import about from '../../styles/about/about.css'
import media from '../../styles/about/mediaAbout.css'

function About() {
  return (
    <div className='container'>
      <Image src={'/images/iran.png'} width={1000} height={1000} alt='iran' className='img-iran' />
      <img src='images/process-line.png' className='img-procces' />
      <p className='my-city'>West Azerbaijan</p>
      <div className='container-about'>
      </div>
    </div>
  )
}

export default About