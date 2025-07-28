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
        <h1 className='hi-about'>Hi Dear</h1>
        <h2 className='my-name-about'>I`m Shayan Jafarnejad</h2>
        <p className='texts-about'>I was born in Iran-Kurdistan</p>
        <p className='texts-about'>I`m 17 years old</p>
        <p className='texts-about'>I started my serious activity +2 years ago.</p>
        <p className='texts-about'>I am a front-end developer and have recently entered the back-end field.</p>
      </div>

    </div>
  )
}

export default About