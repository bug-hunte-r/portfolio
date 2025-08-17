import login from '../../styles/login/login.css'
import media from '../../styles/login/mediaLogin.css'
import Silk from '@/anim/Silk'
import FormLogin from '@/components/templates/FormLogin'
import { getUser } from '@/utils/auth'
import { redirect } from 'next/navigation'

async function Login() {

  const user = await getUser()

  if (user) {
      redirect('/')
  }

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

      <FormLogin />
    </div>
  )
}

export default Login