"use client"
import SplitText from '@/anim/SplitText';
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function FormContact({ user, username }) {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const notifyMessageSend = () => toast.success("Message Send Successfully");
    const notifyDataNotValid = () => toast.error("Datas are not valid");
    const notifyServerErorr = () => toast.error("Internal Server Erorr");
    const notifyFirstLogin = () => toast.warning("Please Login First");

    const sendMessageHandler = async () => {

        if (user) {

            const messageMap = {
                name,
                message
            }

            const res = await fetch('/api/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(messageMap)
            })
            const data = await res.json()

            if (res.status === 400) {
                notifyDataNotValid()
            }

            if (res.status === 500) {
                notifyServerErorr()
            }

            if (res.status === 201) {

                notifyMessageSend()
                setName('')
                setMessage('')
            }

        } else {
            notifyFirstLogin()
            redirect('/login')
        }
    }

    return (
        <div className='form-contact'>
            {username ? (
                <SplitText
                    text={`Send Your Message ${username}`}
                    className="text-2xl font-semibold text-center text-top-conatct"
                    delay={100}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0}
                    rootMargin="-100px"
                    textAlign="center"
                />
            ) : (
                <SplitText
                    text="Please Login First"
                    className="text-2xl font-semibold text-center text-top-conatct"
                    delay={100}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0}
                    rootMargin="-100px"
                    textAlign="center"
                />
            )}

            <input placeholder='Your Name' className='inputs-contact' type='text' value={name} onChange={event => setName(event.target.value)} />
            <input placeholder='Your Short Message' className='inputs-contact area' type='text' value={message} onChange={event => setMessage(event.target.value)} />
            <button className='btn-contact' onClick={sendMessageHandler}>Send</button>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default FormContact