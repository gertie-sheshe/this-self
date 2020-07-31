import React from 'react';
import './projects.scss';

const Project = () => (
    <div className="project">
        <div>LATEST PROJECTS</div>
        <div className="project-display">
            <a href="github.com" >
                <p className="project-language">JAVASCRIPT</p>
                <h2 className="project-name">GitHub Timeline</h2>
                <p>Simple app that displays a user's timeline. Accessibility</p>
            </a>
        </div>
        <div className="project-display">
            <a href="github.com" >
                <p className="project-language">JAVASCRIPT</p>
                <h2 className="project-name">Document Management App</h2>
                <p>Document Management App built with Reactjs, NodeJS and MongoDB</p>
            </a>
        </div>
        <div className="project-display">
            <a href="github.com">
                <p className="project-language">JAVASCRIPT</p>
                <h2 className="project-name">Task Manager + CLI Note Taking App</h2>
                <p>Simple NodeJS Apps</p>
            </a>
        </div>
       
    </div>
)

export default Project;
