"use client"
import { redirect } from 'next/navigation'
import { useState } from 'react'

function FormContact({ user }) {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

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

            alert(data.message)

            if (res.status === 201) {
                setName('')
                setMessage('')
            }

        } else {
            alert('Please first login')
            redirect('/login')
        }
    }

    return (
        <div className='form-contact'>
            <input placeholder='Your Name' className='inputs-contact' type='text' value={name} onChange={event => setName(event.target.value)} />
            <input placeholder='Your Short Message' className='inputs-contact area' type='text' value={message} onChange={event => setMessage(event.target.value)} />
            <button className='btn-contact' onClick={sendMessageHandler}>Send</button>
        </div>
    )
}

export default FormContact