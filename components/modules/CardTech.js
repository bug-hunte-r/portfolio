import React from 'react'
import cardTech from '../../styles/cardTech/cardTech.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";





function CardTech() {
    return (
        <>
            <div className='container-cards'>
                <FaHtml5 className='img-card-skill html' size={70} />
                <h2 className='title-card-skill'>HTML</h2>
            </div>

            <div className='container-cards'>
                <FaCss3Alt className='img-card-skill css' size={70} />
                <h2 className='title-card-skill'>CSS</h2>
            </div>

            <div className='container-cards'>
                <FaJsSquare className='img-card-skill js' size={70} />
                <h2 className='title-card-skill'>JAVASCRIPT</h2>
            </div>

            <div className='container-cards'>
                <RiReactjsLine className='img-card-skill react' size={70} />
                <h2 className='title-card-skill'>REACT</h2>
            </div>

            <div className='container-cards'>
                <SiNextdotjs className='img-card-skill next' size={70} />
                <h2 className='title-card-skill'>NEXT</h2>
            </div>

            <div className='container-cards'>
                <RiTailwindCssFill className='img-card-skill tailwind' size={70} />
                <h2 className='title-card-skill'>TAILWIND</h2>
            </div>
        </>
    )
}

export default CardTech