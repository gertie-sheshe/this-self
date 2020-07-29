import React from 'react';
import './projects.scss';

const Project = () => (
    <div className="project">
        <div>PROJECTS</div>
        <a href="github.com" className="project-display">
            <p className="project-language">JAVASCRIPT</p>
            <p className="project-link">Project Title</p>
            <p>Project Description</p>
        </a>
        {/* <div className="project-display">
            <p className="project-language">JAVASCRIPT</p>
            <a className="project-link" href="github.com">Project Title</a>
            <p>Project Description</p>
        </div>
        <div className="project-display">
            <p className="project-language">JAVASCRIPT</p>
            <a className="project-link" href="github.com">Project Title</a>
            <p>Project Description</p>
        </div> */}
    </div>
)

export default Project;
