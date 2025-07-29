import Image from 'next/image'
import React from 'react'
import about from '../../styles/about/about.css'
import media from '../../styles/about/mediaAbout.css'
import { FaCircle } from "react-icons/fa6";
import TextPressure from '../../anim/TextPressure';
import SplitText from '@/anim/SplitText';
import Numbers from '../modules/Numbers';

function About() {
  return (
    <div className='container'>

      {/* <h1 className='title-about'>About</h1> */}

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

    <Numbers />
    </div>
  )
}

export default About