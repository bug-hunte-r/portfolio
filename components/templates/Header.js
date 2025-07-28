"use client"
import React from 'react'
import header from '../../styles/header/header.css'
import media from '../../styles/header/mediaHeader.css'
import TextType from '../../anim/TextType';
import SplitText from '@/anim/SplitText';
import FadeContent from '../../anim/FadeContent'


function Header() {
  return (
    <div className='container'>
      <div className='conatiner-header'>

        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <h1 className='my-name'>I`m Shayan Jafarnejad</h1>
        </FadeContent>

        <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <div className='container-tech'>
            <h1 className='my-name'>I`m</h1>
            <TextType
              text={["Frontend", "Backend"]}
              typingSpeed={100}
              pauseDuration={1000}
              showCursor={false}
              textColors={'#6F61C0'}
              className='my-tech'
              deletingSpeed={100}
            />
            <h1 className='my-name'>Developer</h1>
          </div>
        </FadeContent>

        <div className='container-btns-header'>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <button className='btn-hire'>Hire me</button>
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <button className='btn-get-resume'>Get resume</button>
          </FadeContent>
        </div>

      </div>
    </div>
  )
}

export default Header