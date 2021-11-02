import React, { useState } from 'react'
import SingleProject from './SingleProject'
import { projectsData } from './ProjectsData'

export default function ProjectsList() {
    const [projects] = useState(projectsData)

    return (
        <div className='project-page-wrapper'>
            <h2 className='section-title'>Projects</h2>
            <div className='centered'>
            <div className='project-page-container'>
                {projects.map(project => {
                    return (
                        <SingleProject 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            seeLive={project.seeLive}
                            sourceCode={project.sourceCode}
                        />
                    )
                })}
            </div>
            </div>
        </div>
    )
}
