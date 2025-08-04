import Link from 'next/link'
import login from '../../styles/login/login.css'
import media from '../../styles/login/mediaLogin.css'
import Silk from '@/anim/Silk'

function Login() {
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

      <div className='form-login'>
        <h1 className='title-login'>Login</h1>
        <input placeholder='Username or Email' type='text' className='inputs-login' />
        <input placeholder='Password' type='password' className='inputs-login' />
        <button className='btn-login'>Login</button>
        <p className='text-login'>You do not have an account? <Link href={'/signup'} className='link-login'>Signup</Link></p>
      </div>
    </div>
  )
}

export default Login