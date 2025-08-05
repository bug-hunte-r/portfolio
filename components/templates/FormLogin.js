"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'

function FormLogin() {

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async () => {

        const userMap = {
            identifier,
            password
        }

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userMap)
        })
        const data = await res.json()

        alert(data.message)

        if (res.status === 200) {
            setIdentifier('')
            setPassword('')

            redirect('/#contact')
        }
    }

    return (
        <div className='form-login'>
            <h1 className='title-login'>Login</h1>

            <input placeholder='Username or Email' type='text' className='inputs-login' value={identifier} onChange={event => setIdentifier(event.target.value)} />

            <input placeholder='Password' type='password' className='inputs-login' value={password} onChange={event => setPassword(event.target.value)} />

            <button className='btn-login' onClick={loginHandler}>Login</button>
            <p className='text-login'>Don`t have an account? <Link href={'/signup'} className='link-login'>Signup</Link></p>
        </div>
    )
}

export default FormLogin