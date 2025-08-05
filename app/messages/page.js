import messages from '../../styles/messages/messages.css'
import media from '../../styles/messages/mediaMessages.css'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import { CiSquareRemove } from "react-icons/ci";
import connectToDb from '@/utils/db';
import Message from '@/models/messgae';
import { getUser } from '@/utils/auth';
import { redirect } from 'next/navigation';

async function page() {

    await connectToDb()
    const allMessages = await Message.find({}).populate('user')

    const user = await getUser()

    if (user.role !== 'ADMIN') {
        redirect('/')
    }
    
    return (
        <div className='container'>
            <div className='container-messages'>
                <div className='container-link-and-title-messages'>
                    <h1 className='title-messages'>Messages</h1>
                    <Link href={'/'} className='link-to-home-messages'>Home <FaArrowRightLong className='icon-go-home-messages' /></Link>
                </div>

                {allMessages.map((message) => (
                    <div className='messages-box' key={message._id}>
                        <h4 className='user-name'><span className='titles-box'>Name</span>: {message.name}</h4>
                        <h4 className='username-user'><span className='titles-box'>Username</span>: {message.user.username}</h4>
                        <h2 className='message-body'><span className='titles-box'>Message</span>: {message.message}</h2>
                        <h3 className='date-message'><span className='titles-box'>Date</span>: {message.createdAt.toLocaleDateString("fa-IR")}</h3>
                        <CiSquareRemove className='icon-remove-messagee' />
                    </div>
                ))}

            </div>
        </div>
    )
}
export default page