import contact from '../../styles/contact/contact.css'
import media from '../../styles/contact/mediaContact.css'
import DarkVeil from '@/anim/DarkVeil'

function Contact() {
  return (
    <div className='container'>

      <div className='dark'>
        <DarkVeil />
      </div>
      
      <div className='container-contact'>

        <div className='container-contact-info'>
          <h2 className='contact-ways'>Contact</h2>
          <p className='desc-contact'>To get in touch, please fill out the form.</p>
        </div>


        <div className='form-contact'>
          <input placeholder='Your Name' className='inputs-contact' type='text' />
          <input placeholder='Your Email' className='inputs-contact' type='email' />
          <input placeholder='Your Message' className='inputs-contact' type='text' />
          <button className='btn-contact'>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contact