import React from 'react'
import cardProject from '../../styles/cardProject/cardProject.css'
import Image from 'next/image'

function CardProject() {
  return (
    <>
      <div className='card-project'>
        <Image src={'/images/giah.jpg'} width={310} height={300} alt='img-project' className='img-project' />
        <p className='desc-project-card'>GiahLand shopping site developed with React and Next</p>
      </div>
    </>
  )
}

export default CardProject