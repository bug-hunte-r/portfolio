import messages from '../../styles/messages/messages.css'
import media from '../../styles/messages/mediaMessages.css'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";
import connectToDb from '@/utils/db';
import Message from '@/models/messgae';
import { getUser } from '@/utils/auth';
import { redirect } from 'next/navigation';

async function page() {

    await connectToDb()
    const allMessages = await Message.find({}).populate('user')

    const user = await getUser()

    if (user.role !== 'ADMIN' || !user) {
        redirect('/')
    }

    return (
        <div className='container'>
            <div className='container-messages'>
                <div className='container-link-and-title-messages'>
                    <h1 className='title-messages'>Messages</h1>
                    <Link href={'/'} className='link-to-home-messages'>Home <FaArrowRightLong className='icon-go-home-messages' /></Link>
                </div>

                {allMessages.map((message, index) => (
                    <div className='messages-box' key={message._id}>
                        <h4 className='texts-box-messages id'><span className='titles-box'>ID:</span> {index + 1}</h4>
                        <h4 className='texts-box-messages'><span className='titles-box'>Name:</span> {message.name}</h4>
                        <h4 className='texts-box-messages'><span className='titles-box'>Username:</span> {message.user.username}</h4>
                        <h4 className='texts-box-messages'><span className='titles-box'>Email:</span> {message.user.email}</h4>
                        <h3 className='texts-box-messages'><span className='titles-box'>Message:</span> {message.message}</h3>
                        <h3 className='texts-box-messages date'><span className='titles-box'>Date:</span> {message.createdAt.toLocaleDateString("fa-IR")}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default page