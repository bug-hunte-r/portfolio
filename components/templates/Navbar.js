import React from 'react'
import navbar from '../../styles/navbar/navbar.css'
import mediaNavbar from '../../styles/navbar/mediaNavbar.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className='container'>
            <h1 className='logo'>JAF.</h1>
            <div className='container-links'>
                <Link href={'/'} className='nav-links'>Home</Link>
                <Link href={'/'} className='nav-links'>About</Link>
                <Link href={'/'} className='nav-links'>Projects</Link>
                <Link href={'/'} className='nav-links'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar