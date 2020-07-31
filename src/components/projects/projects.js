import React from 'react';
import './projects.scss';

const Project = () => (
    <div className="project">
        <h2 className="title">LATEST PROJECTS</h2>
        <div className="project-display">
            <a href="" >
                <p className="project-language">JAVASCRIPT</p>
                <h3 className="project-name">Africa Data</h3>
                <p>Data Visualization of African Countries</p>
            </a>
        </div>
        <div className="project-display">
            <a href="" >
                <p className="project-language">JAVASCRIPT</p>
                <h3 className="project-name">Agile Books</h3>
                <p>Read more diligently by having stand ups with your books :D</p>
            </a>
        </div>
        <div className="project-display">
            <a href="">
                <p className="project-language">HTML/CSS</p>
                <h3 className="project-name">CSS Art</h3>
                <p>Fun Art with CSS</p>
            </a>
        </div>
       
    </div>
)

export default Project;
