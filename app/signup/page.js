import signup from '../../styles/Signup/Signup.css'
import media from '../../styles/Signup/mediaSignup.css'
import Silk from '@/anim/Silk'
import InputsSignup from '@/components/templates/InputsSignup'

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

            <InputsSignup />
        </div>
    )
}

export default Signup