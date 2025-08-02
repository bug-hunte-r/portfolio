import React from 'react'
import projects from '../../styles/projects/projects.css'
import media from '../../styles/projects/mediaProjects.css'
import CardProject from '../modules/CardProject'

function Projects() {
    return (
        <div className='container'>
            <h1 className='title-projects'>Projects</h1>
            <div className='container-projects-card'>
                {/* <CardProject /> */}
            </div>
        </div>
    )
}

export default Projects