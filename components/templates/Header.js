"use client"
import React from 'react'
import header from '../../styles/header/header.css'
import media from '../../styles/header/mediaHeader.css'
import TextType from '../../anim/TextType';
import SplitText from '@/anim/SplitText';
import FadeContent from '../../anim/FadeContent'
import Link from 'next/link';


function Header() {
  return (
    <div className='container'>
      <div className='conatiner-header'>

        <SplitText
          text="I`m Shayan Jafarnejad"
          className="text-2xl font-semibold text-center my-name"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />

          <div className='container-tech'>
            <h1 className='me'>I`m</h1>
            <TextType
              text={["Frontend", "Backend"]}
              typingSpeed={50}
              pauseDuration={1800}
              showCursor={false}
              textColors={'#6F61C0'}
              className='my-tech'
              deletingSpeed={50}
            />
            <h1 className='me'>Developer</h1>
          </div>

        <div className='container-btns-header'>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <Link className='btn-hire' href={'/#contact'}>Hire me</Link>
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <a href={'Shayan Jafarnejad.pdf'} className='btn-get-resume' download>Get resume</a>
          </FadeContent>
        </div>

      </div>
    </div>
  )
}

export default Header