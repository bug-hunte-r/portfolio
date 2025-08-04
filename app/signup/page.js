import Link from 'next/link'
import signup from '../../styles/Signup/Signup.css'
import media from '../../styles/Signup/mediaSignup.css'
import Silk from '@/anim/Silk'

function Signup() {
  return (
    <div className='container'>

      <div className='silk'>
        <Silk
          speed={5}
          scale={1}
          color="#5227ff"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className='form-Signup'>
        <h1 className='title-Signup'>Signup</h1>
        <input placeholder='Username' type='text' className='inputs-Signup' />
        <input placeholder='Email' type='email' className='inputs-Signup' />
        <input placeholder='Password' type='password' className='inputs-Signup' />
        <button className='btn-Signup'>Signup</button>
        <p className='text-signup'>Already have an account? <Link href={'/login'} className='link-signup'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup