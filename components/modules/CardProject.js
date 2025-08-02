"use client"
import React, { useState } from 'react'
import cardProject from '../../styles/cardProject/cardProject.css'
import Image from 'next/image'

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
      <div className='card-project' onMouseEnter={blurHandlerGi} onMouseLeave={UnBlurHandlerGi}>
        <Image src={GiahLand?.img} width={700} height={700} alt='img-project' className='img-project' />
        <p className={`${isBlurGi ? 'desc-project-card' : 'desc-none'}`}>{GiahLand?.title} <br /> <br /> {GiahLand?.start}<br /> <br /> {GiahLand?.finish}</p>
      </div>

      <div className='card-project' onMouseEnter={blurHandler} onMouseLeave={UnBlurHandler}>
        <Image src={FitLand?.img} width={700} height={700} alt='img-project' className='img-project' />
        <p className={`${isBlur ? 'desc-project-card' : 'desc-none'}`}>{FitLand?.title} <br /> <br /> {FitLand?.start}<br /> <br /> {FitLand?.finish}</p>
      </div>
    </>
  )
}

export default CardProject