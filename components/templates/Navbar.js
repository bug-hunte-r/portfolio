"use client"
import navbar from '../../styles/navbar/navbar.css'
import mediaNavbar from '../../styles/navbar/mediaNavbar.css'
import Link from 'next/link'
import SplitText from './../../anim/SplitText'

function Navbar() {

    return (
        <div className='container'>

            <div className='container-logo'>
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
                />
            </div>

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
                    />
                </Link>
                <Link href={'/#about'}>
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
                    />
                </Link>
                <Link href={'/#skills'}>
                    <SplitText
                        text="Skills"
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
                    />
                </Link>
                <Link href={'/#projects'}>
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
                    />
                </Link>

                <Link href={'/#contact'}>
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
                    />
                </Link>

            </div>
        </div>
    )
}

export default Navbar