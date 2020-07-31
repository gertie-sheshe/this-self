import React from 'react';
import './projects.scss';

const Project = () => (
    <div className="project">
        <div>LATEST PROJECTS</div>
        <div className="project-display">
            <a href="github.com" >
                <p className="project-language">JAVASCRIPT</p>
                <h2 className="project-name">Africa Data</h2>
                <p>Data Visualization of African Countries</p>
            </a>
        </div>
        <div className="project-display">
            <a href="github.com" >
                <p className="project-language">JAVASCRIPT</p>
                <h2 className="project-name">Agile Books</h2>
                <p>Read more diligently by having stand ups with your books :D</p>
            </a>
        </div>
        <div className="project-display">
            <a href="github.com">
                <p className="project-language">HTML/CSS</p>
                <h2 className="project-name">CSS Art</h2>
                <p>CSS Art of a Tea Cup</p>
            </a>
        </div>
       
    </div>
)

export default Project;
