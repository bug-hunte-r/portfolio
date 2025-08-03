"use client"
import React from 'react'
import projects from '../../styles/projects/projects.css'
import media from '../../styles/projects/mediaProjects.css'
import CardProject from '../modules/CardProject'
import SplitText from '@/anim/SplitText'

function Projects() {

    const GiahLand = { img: '/images/giah2.jpeg', title: 'GiahLand shopping site developed with React and Next', start: 'Started at 2025 ⁄ 3 ⁄ 11', finish: 'Finished at 2025 / 3 / 29' }

    const FitLand = { img: '/images/fit2.png', title: 'FitLand, Sport shopping site developed with React and Next', start: 'Started at 2025 ⁄ 4 ⁄ 19', finish: 'Finished at 2025 / 4 / 29' }

    return (
        <div className='container'>
            <div id='projects'></div>
            <SplitText
                text="Projects"
                className="text-2xl font-semibold text-center title-projects"
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
            <div className='container-projects-card'>
                <CardProject GiahLand={GiahLand} FitLand={FitLand} />
            </div>
        </div>
    )
}

export default Projects