import React from 'react';
import './talks.scss';

const Talks = () => (
    <div className="talks">
        <div>TALKS/WORKSHOPS</div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">event</i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Taking Accessibility With You</h2>
                    <p>Cape Town, South Africa - 2020</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">event</i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Javascript Arrays + Time Complexity</h2>
                    <p>Kigali, Rwanda - 2020</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">event</i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Introduction to React</h2>
                    <p>Kitwe, Zambia - 2018</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i className="material-icons">event</i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Web Accessibility</h2>
                    <p>Nairobi, Kenya - 2018</p>
                </div>
            </a>
        </div>
    </div>
);

export default Talks;
