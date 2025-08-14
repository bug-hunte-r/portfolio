"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function InputsSignup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notifyNotValid = () => toast.warning("Datas are not valid");
    const notifyDataExist = () => toast.error("This username or email is already exist");
    const notifySignUped = () => toast.success("You are Signuped Successfully");
    const notifyServerErorr = () => toast.error("Internal Server Erorr!");

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

        if (res.status === 201) {
            setUsername('')
            setEmail('')
            setPassword('')

            notifySignUped()
            redirect('/#contact')
        }

        if (res.status === 400) {
            notifyNotValid()
        }
        if (res.status === 409) {
            notifyDataExist()
        }
        if (res.status === 500) {
            notifyServerErorr()
        }
    }


    return (
        <div className='form-Signup'>
            <h1 className='title-Signup'>Signup</h1>
            <input placeholder='Username' type='text' className='inputs-Signup' value={username} onChange={event => setUsername(event.target.value)} />

            <input placeholder='Email' type='text' className='inputs-Signup' value={email} onChange={event => setEmail(event.target.value)} />

            <input placeholder='Password' type='password' className='inputs-Signup' value={password} onChange={event => setPassword(event.target.value)} />

            <button className='btn-Signup' onClick={signupHandler}>Signup</button>
            <p className='text-Signup'>Already have an account? <Link href={'/login'} className='link-Signup'>Login</Link></p>
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

export default InputsSignup