import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { LuBookUser } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi";
import bottombar from './../../styles/bottombar/bottombar.css'
import mediaBottombar from './../../styles/bottombar/mediaBottombar.css'

function Bottombar() {
    return (
        <div className='container'>
            <div className='container-bottombar'>
                <IoHomeOutline className='icons-bottombar' size={23}/>
                <LuBookUser className='icons-bottombar' size={23}/>
                <CgWebsite className='icons-bottombar' size={23}/>
                <HiOutlinePhone className='icons-bottombar' size={23} />
            </div>
        </div>
    )
}

export default Bottombar