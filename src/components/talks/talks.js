import React from 'react';
import talks from './data'
import './talks.scss';

const Talks = () => (
    <div className="talks">
        <h3 className="title">TALKS, WORKSHOPS AND INTERVIEWS</h3>
        {talks.data.map((talk, index) => (
            <div className="talks-display">
                <a href={talk.link}>
                    <div className="container">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                    <div className="talk-details">
                        <h3 className="talk-title">{talk.title}</h3>
                        <p>{talk.host}</p>
                        <p>{talk.location}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>
);

export default Talks;
