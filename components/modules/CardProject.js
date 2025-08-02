"use client"
import React, { useState } from 'react'
import cardProject from '../../styles/cardProject/cardProject.css'
import media from '../../styles/cardProject/mediaCardProject.css'
import Image from 'next/image'
import FadeContent from '@/anim/FadeContent'

function CardProject({ GiahLand, FitLand }) {

  const [isBlurGi, setIsBlurGi] = useState(true)
  const [isBlur, setIsBlur] = useState(true)

  const blurHandlerGi = () => {
    setIsBlurGi(false)
  }

  const UnBlurHandlerGi = () => {
    setIsBlurGi(true)
  }

  const blurHandler = () => {
    setIsBlur(false)
  }

  const UnBlurHandler = () => {
    setIsBlur(true)
  }

  return (
    <>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='card-project gi' onMouseEnter={blurHandlerGi} onMouseLeave={UnBlurHandlerGi}>
          <Image src={GiahLand?.img} width={700} height={700} alt='img-project' className={`${isBlurGi ? 'img-project' : 'img-project-unBlur'}`} />
          <p className={`${isBlurGi ? 'desc-project-card' : 'desc-project-card-none'}`}>{GiahLand?.title} <br /> <br /> {GiahLand?.start}<br /> <br /> {GiahLand?.finish}</p>
        </div>
      </FadeContent>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='card-project' onMouseEnter={blurHandler} onMouseLeave={UnBlurHandler}>
        <Image src={FitLand?.img} width={700} height={700} alt='img-project' className={`${isBlur ? 'img-project' : 'img-project-unBlur'}`} />
        <p className={`${isBlur ? 'desc-project-card' : 'desc-project-card-none'}`}>{FitLand?.title} <br /> <br /> {FitLand?.start}<br /> <br /> {FitLand?.finish}</p>
        </div>
      </FadeContent>

    </>
  )
}

export default CardProject