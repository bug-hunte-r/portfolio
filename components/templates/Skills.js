import React from 'react'
import skills from '../../styles/skills/skills.css'
import media from '../../styles/skills/mediaSkills.css'
import CardTech from '../modules/CardTech'
import SplitText from '@/anim/SplitText'

function Skills() {
  return (
    <div className='container'>
      <SplitText
        text="My Skills"
        className="text-2xl font-semibold text-center title-skills"
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

      <div className='container-cards-in-skill-page'>
        <CardTech />
      </div>
    </div>
  )
}

export default Skills