"use client"

import React from 'react'
import projects from '../../styles/projects/projects.css'
import media from '../../styles/projects/mediaProjects.css'
import CardProject from '../modules/CardProject'

function Projects() {

    const GiahLand = {
        img: '/images/giah2.jpeg',
        title: 'GiahLand shopping site developed with React and Next',
        start: 'Started at 2025 ⁄ 3 ⁄ 11',
        finish: 'Finished at 2025 / 3 / 29'
    }

    const FitLand = {
        img: '/images/fit2.png',
        title: 'FitLand, Sport shopping site developed with React and Next',
        start: 'Started at 2025 ⁄ 4 ⁄ 19',
        finish: 'Finished at 2025 / 4 / 29'
    }

    return (
        <div className='container'>
            <h1 className='title-projects'>Projects</h1>
            <div className='container-projects-card'>
                <CardProject GiahLand={GiahLand} FitLand={FitLand} />
            </div>
        </div>
    )
}

export default Projects