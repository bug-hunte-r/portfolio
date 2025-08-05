"use client"
import Link from 'next/link'
import { useState } from 'react'

function InputsSignup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupHandler = async () => {

        const userMap = {
            username,
            email,
            password
        }

        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userMap)
        })        
        const data = await res.json()

        alert(data.message)
    }


    return (
        <div className='form-Signup'>
            <h1 className='title-Signup'>Signup</h1>
            <input placeholder='Username' type='text' className='inputs-Signup' value={username} onChange={event => setUsername(event.target.value)} />

            <input placeholder='Email' type='text' className='inputs-Signup' value={email} onChange={event => setEmail(event.target.value)} />

            <input placeholder='Password' type='password' className='inputs-Signup' value={password} onChange={event => setPassword(event.target.value)} />

            <button className='btn-Signup' onClick={signupHandler}>Signup</button>
            <p className='text-Signup'>Already have an account? <Link href={'/login'} className='link-Signup'>Login</Link></p>
        </div>
    )
}

export default InputsSignup