"use client"
import React, { useState } from 'react'
import cardProject from '../../styles/cardProject/cardProject.css'
import media from '../../styles/cardProject/mediaCardProject.css'
import FadeContent from '@/anim/FadeContent'

function CardProject({GiahLand, FitLand}) {

  const [isBlur, setIsBlur] = useState(true)
  const [isBlurGi, setIsBlurGi] = useState(true)

  const blurHandler = () => {
    setIsBlur(false)
  }

  const UnBlurHandler = () => {
    setIsBlur(true)
  }

  const blurHandlerGi = () => {
    setIsBlurGi(false)
  }

  const UnBlurHandlerGi = () => {
    setIsBlurGi(true)
  }

  return (
    <>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='card-project'>
          <img src={GiahLand?.img} alt='img-project' className={`${isBlur ? 'img-project' : 'img-project-unBlur'}`} onMouseEnter={blurHandler} onMouseLeave={UnBlurHandler} loading='lazy' />
          <p className={`${isBlur ? 'desc-project-card' : 'desc-project-card-none'}`} onMouseEnter={blurHandler} onMouseLeave={UnBlurHandler}>{GiahLand?.title} <br /> <br /> {GiahLand?.start}<br /> <br /> {GiahLand?.finish}</p>
        </div>
      </FadeContent>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='card-project'>
          <img src={FitLand?.img} alt='img-project' className={`${isBlurGi ? 'img-project' : 'img-project-unBlur'}`} onMouseEnter={blurHandlerGi} onMouseLeave={UnBlurHandlerGi} loading='lazy' />
          <p className={`${isBlurGi ? 'desc-project-card' : 'desc-project-card-none'}`} onMouseEnter={blurHandlerGi} onMouseLeave={UnBlurHandlerGi}>{FitLand?.title} <br /> <br /> {FitLand?.start}<br /> <br /> {FitLand?.finish}</p>
        </div>
      </FadeContent>
    </>
  )
}

export default CardProject