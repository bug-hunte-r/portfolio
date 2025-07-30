import React from 'react'
import cardTech from '../../styles/cardTech/cardTech.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import AnimatedContent from '@/anim/AnimatedContent';

function CardTech() {
    return (
        <>

            <AnimatedContent
                distance={1}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                animateOpacity
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <FaHtml5 className='img-card-skill html' size={70} />
                    <h2 className='title-card-skill'>HTML</h2>
                </div>
            </AnimatedContent>

            <AnimatedContent
                distance={1}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                animateOpacity
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <FaCss3Alt className='img-card-skill css' size={70} />
                    <h2 className='title-card-skill'>CSS</h2>
                </div>
            </AnimatedContent>

            <AnimatedContent
                distance={1}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                animateOpacity
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <FaJsSquare className='img-card-skill js' size={70} />
                    <h2 className='title-card-skill'>JAVASCRIPT</h2>
                </div>
            </AnimatedContent>


            <AnimatedContent
                distance={1}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                animateOpacity
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <RiReactjsLine className='img-card-skill react' size={70} />
                    <h2 className='title-card-skill'>REACT</h2>
                </div>
            </AnimatedContent>

            <AnimatedContent
                distance={1}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                animateOpacity
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <SiNextdotjs className='img-card-skill next' size={70} />
                    <h2 className='title-card-skill'>NEXT</h2>
                </div>
            </AnimatedContent>

            <AnimatedContent
                distance={1}
                direction="horizontal"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={2}
                scale={0}
                threshold={0}
                delay={0.1}
            >
                <div className='container-cards'>
                    <RiTailwindCssFill className='img-card-skill tailwind' size={70} />
                    <h2 className='title-card-skill'>TAILWIND</h2>
                </div>
            </AnimatedContent>

        </>
    )
}

export default CardTech