import sign from '../../styles/signin/signin.css'
import media from '../../styles/signin/mediaSignin.css'

function Signin() {
  return (
    <div className='container'>
      <div className='form-signin'>
        <input placeholder='Username' type='text' className='inputs-signin' />
        <input placeholder='Email' type='email' className='inputs-signin' />
        <input placeholder='Password' type='password' className='inputs-signin' />
        <button className='btn-signin'>Signin</button>
      </div>
    </div>
  )
}

export default Signin