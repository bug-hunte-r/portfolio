import contact from '../../styles/contact/contact.css'
import media from '../../styles/contact/mediaContact.css'
import SplitText from '@/anim/SplitText'
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import FormContact from './FormContact';
import { getUser } from '@/utils/auth';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

async function Contact() {

  const user = await getUser()

  return (
    <div className='container'>

      <div className='container-contact' id='contact'>

        <div className='container-contact-info'>
          <SplitText
            text="Contact Ways"
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

          <div className='socials'>
            <a href='https://t.me/shayan_jaf'><RiTelegram2Line className='icons-socials' /></a>
            <a href='https://instagram.com/shayan._.jaf_'><FaInstagram className='icons-socials' /></a>
            <div className='phone'>
              <a href={`tel: ${+989149582599}`}><IoPhonePortraitOutline className='icons-socials' /></a>
              <p className='phone-number'>+98 9149582599</p>
            </div>
            <a href='http://github.com/bug-hunte-r'><FaGithub className='icons-socials' /></a>
          </div>


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
          {user?.role === 'ADMIN' && (
            <Link className='link-messages' href={'/messages'}>Messages <FaArrowRightLong /></Link>
          )}
        </div>

        <FormContact user={user?.email} username={user?.username} />

      </div>
    </div>
  )
}

export default Contact