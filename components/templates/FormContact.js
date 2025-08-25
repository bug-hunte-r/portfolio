"use client"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function FormContact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const notifyMessageSend = () => toast.success("Message Sent Successfully");
    const notifyMessageError = () => toast.error("Failed to send message");

    const sendMessageHandler = async () => {

        const messageMap = {
            name,
            email,
            message
        }

        const res = await fetch('https://formspree.io/f/meoljgpj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageMap)
        })
        await res.json()

        if (res.ok) {
            notifyMessageSend()
            setName('')
            setEmail('')
            setMessage('')
        } else {
            notifyMessageError()
        }

    }

    return (
        <div className='form-contact'>

            <input placeholder='Your Name' className='inputs-contact' type='text' value={name} onChange={event => setName(event.target.value)} />
            <input placeholder='Your Email' className='inputs-contact' type='text' value={email} onChange={event => setEmail(event.target.value)} />
            <textarea placeholder='Your Message' className='inputs-contact area' type='text' value={message} onChange={event => setMessage(event.target.value)} />
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