import Image from 'next/image'
import React from 'react'
import about from '../../styles/about/about.css'
import media from '../../styles/about/mediaAbout.css'
import { FaCircle } from "react-icons/fa6";
import SplitText from '@/anim/SplitText';

function About() {
  return (
    <div className='container'>

      <SplitText
        text="About me"
        className="text-2xl font-semibold text-center title-about"
        delay={200}
        duration={2}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="-100px"
        textAlign="center"
      />

      <Image src={'/images/iran.png'} width={1000} height={1000} alt='iran' className='img-iran' />
      <div className='container-about'>
        <h2 className='my-name-about'>I`m Shayan Jafarnejad</h2>

        <div className='container-texts'>
          <p className='texts-about'><FaCircle className='circles-about' />I was born in Iran-Kurdistan</p>
          <p className='texts-about'><FaCircle className='circles-about' />I`m 17 years old</p>
          <p className='texts-about'><FaCircle className='circles-about' />I started my serious activity +2 years ago.</p>
          <p className='texts-about'><FaCircle className='circles-about' />I`m a frontend developer and have recently entered the backend field</p>
        </div>
      </div>

    </div>
  )
}

export default About