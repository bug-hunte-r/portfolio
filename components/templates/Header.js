"use client"
import React from 'react'
import header from '../../styles/header/header.css'
import media from '../../styles/header/mediaHeader.css'
import TextType from '../../anim/TextType';
import SplitText from '@/anim/SplitText';
import FadeContent from '../../anim/FadeContent'
import { ToastContainer, toast } from 'react-toastify';

function Header() {

  const notifyDownload = () => toast.success("Resume Downloaded Successfully");

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
            <button className='btn-hire'><a href={'/#contact'} className='a1'>Hire me</a></button>
          </FadeContent>
          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <button className='btn-get-resume'><a href={'Shayan Jafarnejad.pdf'} download className='a2' onClick={notifyDownload}>Get resume</a></button>
          </FadeContent>
        </div>

      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Header