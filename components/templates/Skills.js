import React from 'react'
import skills from '../../styles/skills/skills.css'
import media from '../../styles/skills/mediaSkills.css'
import CardTech from '../modules/CardTech'

function Skills() {
  return (
    <div className='container'>
      <h1 className='title-skills'>My Skills</h1>
      <div className='container-cards-in-skill-page'>
        <CardTech />
      </div>
    </div>
  )
}

export default Skills