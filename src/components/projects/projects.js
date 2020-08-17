import React from 'react';
import project from './data';
import './projects.scss';

const Project = () => (
    <div className="project">
        <h2 className="title">LATEST PROJECTS</h2>
        {project.data.map((project, index) => (
            <div key={index} className="project-display">
                <a href={project.link} >
                    <p className="project-language">{project.tech}</p>
                    <h3 className="project-name">{project.title}</h3>
                    <p>{project.description}</p>
                </a>
        </div>  
        ))}         
    </div>
)

export default Project;
