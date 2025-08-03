import contact from '../../styles/contact/contact.css'
import media from '../../styles/contact/mediaContact.css'

function Contact() {
  return (
    <div className='container'>
      <h2 className='title-contact'>Contact</h2>
      <div className='form-contact'>
        <input placeholder='Name' className='inputs-contact' type='text' />
        <input placeholder='Email' className='inputs-contact' type='email' />
        <textarea placeholder='Your Message' className='inputs-contact' type='text' />
        <button className='btn-contact'>Send</button>
      </div>
    </div>
  )
}

export default Contact