import messages from '../../styles/messages/messages.css'
import media from '../../styles/messages/mediaMessages.css'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";

function page() {
    return (
        <div className='container'>
            <div className='container-messages'>
                <div className='container-link-and-title-messages'>
                    <h1 className='title-messages'>Messages</h1>
                    <Link href={'/'} className='link-to-home-messages'>Home <FaArrowRightLong className='icon-go-home-messages' /></Link>
                </div>

                <div className='messages-box'>
                    <h4 className='user-name'><span className='titles-box'>Name</span>: Shayan</h4>
                    <h4 className='username-user'><span className='titles-box'>Username</span>: shayanDEV</h4>
                    <h2 className='message-body'><span className='titles-box'>Message</span>: Body</h2>
                    <h4 className='date-message'><span className='titles-box'>Date</span>: 1404/5/16</h4>
                    <CiSquareRemove className='icon-remove-messagee' />
                </div>

            </div>
        </div>
    )
}

export default page