import React from 'react'
import projects from '../../styles/projects/projects.css'
import media from '../../styles/projects/mediaProjects.css'
import DarkVeil from '@/anim/DarkVeil'

function Projects() {
    return (
        <div className='container'>
            <h1 className='title-projects'>Projects</h1>
            <div className='silk'>
                <DarkVeil />
            </div>
        </div>
    )
}

export default Projects