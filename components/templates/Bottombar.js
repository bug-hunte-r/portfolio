import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { FaSquarePhoneFlip } from "react-icons/fa6";


function Bottombar() {
    return (
        <div className='container'>
            <div className='container-bottombar'>
                <FaHome className='icons-bottombar' />
                <FaAddressBook className='icons-bottombar' />
                <MdOutlineWeb className='icons-bottombar' />
                <FaSquarePhoneFlip className='icons-bottombar' />
            </div>
        </div>
    )
}

export default Bottombar