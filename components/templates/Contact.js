import contact from '../../styles/contact/contact.css'
import media from '../../styles/contact/mediaContact.css'
import DarkVeil from '@/anim/DarkVeil'
import SplitText from '@/anim/SplitText'

function Contact() {
  return (
    <div className='container'>

      <div className='dark'>
        <DarkVeil />
      </div>

      <div className='container-contact'>

        <div className='container-contact-info'>
          <SplitText
            text="Contact"
            className="text-2xl font-semibold text-center contact-ways"
            delay={200}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text="To get in touch, please fill out the form"
            className="text-2xl font-semibold text-center desc-contact"
            delay={50}
            duration={2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>


        <div className='form-contact'>
          <input placeholder='Your Name' className='inputs-contact' type='text' />
          <input placeholder='Your Email' className='inputs-contact' type='email' />
          <input placeholder='Your Message' className='inputs-contact area' type='text' />
          <button className='btn-contact'>Send</button>
        </div>

      </div>
    </div>
  )
}

export default Contact