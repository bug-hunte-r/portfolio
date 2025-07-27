"use client"
import React from 'react'
import navbar from '../../styles/navbar/navbar.css'
import mediaNavbar from '../../styles/navbar/mediaNavbar.css'
import Link from 'next/link'
import SplitText from './../../anim/SplitText'


function Navbar() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };


    return (
        <div className='container'>
            <SplitText
                text="JAF."
                className="text-2xl font-semibold text-center logo"
                delay={400}
                duration={2}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
            />

            <div className='container-links'>
                <Link href={'/'}>
                    <SplitText
                        text="Home"
                        className="text-2xl font-semibold text-center nav-links"
                        delay={200}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </Link>
                <Link href={'/'}>
                    <SplitText
                        text="About"
                        className="text-2xl font-semibold text-center nav-links"
                        delay={200}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </Link>
                <Link href={'/'}>
                    <SplitText
                        text="Projects"
                        className="text-2xl font-semibold text-center nav-links"
                        delay={200}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </Link>
                <Link href={'/'}>
                    <SplitText
                        text="Contact"
                        className="text-2xl font-semibold text-center nav-links"
                        delay={200}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Navbar