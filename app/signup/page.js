import sign from '../../styles/Signup/Signup.css'
import media from '../../styles/Signup/mediaSignup.css'
import Silk from '@/anim/Silk'
import SplitText from '@/anim/SplitText'

function Signup() {
  return (
    <div className='container'>

      <div className='container-title-signup'>
        <SplitText
          text="Signup"
          className="title-Signup"
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

      <div className='form-Signup'>
        <input placeholder='Username' type='text' className='inputs-Signup' />
        <input placeholder='Email' type='email' className='inputs-Signup' />
        <input placeholder='Password' type='password' className='inputs-Signup' />
        <button className='btn-Signup'>Signup</button>
      </div>
    </div>
  )
}

export default Signup