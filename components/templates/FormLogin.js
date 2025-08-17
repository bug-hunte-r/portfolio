"use client"
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function FormLogin() {

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const notifyNotValid = () => toast.error("Datas are not valid");
    const notifyAccoutNotFound = () => toast.error("Account not found");
    const notifyDataNotCorrect = () => toast.error("Username or Password is not correct");
    const notifyLoggedIn = () => toast.success("You are Logged In Successfully");
    const notifyServerErorr = () => toast.error("Internal Server Erorr!");

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
        await res.json()

        if (res.status === 200) {
            setIdentifier('')
            setPassword('')

            notifyLoggedIn()

            redirect('/#contact')
        }

        if (res.status === 400) {
            notifyNotValid()
        }
        if (res.status === 404) {
            notifyAccoutNotFound()
        }
        if (res.status === 401) {
            notifyDataNotCorrect()
        }
        if (res.status === 500) {
            notifyServerErorr()
        }

    }

    return (
        <div className='form-login'>
            <Link href={'/'} className='btn-go-home-login'>Home</Link>
            <h1 className='title-login'>Login</h1>

            <input placeholder='Username or Email' type='text' className='inputs-login' value={identifier} onChange={event => setIdentifier(event.target.value)} />

            <input placeholder='Password' type='password' className='inputs-login' value={password} onChange={event => setPassword(event.target.value)} />

            <button className='btn-login' onClick={loginHandler}>Login</button>
            <p className='text-login'>Don`t have an account? <Link href={'/signup'} className='link-login'>Signup</Link></p>
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

export default FormLogin