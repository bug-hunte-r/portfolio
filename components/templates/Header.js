import React from 'react'
import header from '../../styles/header/header.css'
import TextType from '../../anim/TextType';

function Header() {
  return (
    <div className='container'>
      <div className='conatiner-header'>
        <h1 className='my-name'>I`m <abbr style={{ color: '#6F61C0' }}>Shayan</abbr> jafarnejad</h1>

        <div className='container-tech'>
          <h1 className='my-name'>I`m</h1>
          <TextType
            text={["Frontend", "Backend"]}
            typingSpeed={100}
            pauseDuration={1000}
            showCursor={false}
            textColors={'#6F61C0'}
            className='my-tech'
            deletingSpeed={100}
          />
          <h1 className='my-name'>Developer</h1>
        </div>

        <div className='container-btns-header'>
          <button className='btn-hire'>Hire me</button>
          <button className='btn-get-resume'>Get resume</button>
        </div>

      </div>
    </div>
  )
}

export default Header