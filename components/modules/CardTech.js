import React from 'react'
import cardTech from '../../styles/cardTech/cardTech.css'
import media from '../../styles/cardTech/mediaCardTech.css'
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import FadeContent from '@/anim/FadeContent';

function CardTech() {
    return (
        <>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <RiTailwindCssFill className='img-card-skill tailwind' size={70} />
                    <h2 className='title-card-skill'>TAILWIND</h2>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <IoLogoJavascript className='img-card-skill js' size={70} />
                    <h2 className='title-card-skill'>JAVASCRIPT</h2>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <RiReactjsLine className='img-card-skill react' size={70} />
                    <h2 className='title-card-skill'>REACT</h2>
                </div>
            </FadeContent>

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <TbBrandNextjs className='img-card-skill next' size={70} />
                    <h2 className='title-card-skill'>NEXT</h2>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <SiMongodb className='img-card-skill mongo' size={70} />
                    <h2 className='title-card-skill'>MongoDB</h2>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <DiNodejs className='img-card-skill node' size={70} />
                    <h2 className='title-card-skill'>NODE</h2>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <SiExpress className='img-card-skill ex' size={70} />
                    <h2 className='title-card-skill'>EXPRESS</h2>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <BiLogoTypescript className='img-card-skill type' size={70} />
                    <h2 className='title-card-skill'>TYPESCRIPT</h2>
                </div>
            </FadeContent>
            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                <div className='container-cards'>
                    <SiNestjs className='img-card-skill nest' size={70} />
                    <h2 className='title-card-skill'>NEST</h2>
                </div>
            </FadeContent>
        </>
    )
}

export default CardTech