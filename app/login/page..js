import login from '../../styles/login/login.css'
import media from '../../styles/login/mediaLogin.css'
import Silk from '@/anim/Silk'
import SplitText from '@/anim/SplitText'

function Login() {
  return (
    <div className='container'>

      <div className='container-title-login'>
        <SplitText
          text="Login"
          className="title-login"
          delay={200}
          duration={2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </div>

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
        <input placeholder='Username | Email' type='text' className='inputs-login' />
        <input placeholder='Password' type='password' className='inputs-login' />
        <button className='btn-login'>Login</button>
      </div>
    </div>
  )
}

export default Login