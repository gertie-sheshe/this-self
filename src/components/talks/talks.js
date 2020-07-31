import React from 'react';
import './talks.scss';

const Talks = () => (
    <div className="talks">
        <h2 className="title">TALKS, WORKSHOPS AND INTERVIEWS</h2>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Taking Accessibility With You</h2>
                    <p>Indoni DevConf</p>
                    <p>Cape Town, South Africa - 2020</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Javascript Arrays + Time Complexity</h2>
                    <p>Facebook Developer Circles: Kigali</p>
                    <p>Kigali, Rwanda - 2020</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Building a Developer Community</h2>
                    <p>Facebook iD8</p>
                    <p>Nairobi, Kenya - 2019</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Introduction to React</h2>
                    <p>Facebook Developer Circles: Lusaka</p>
                    <p>Kitwe, Zambia - 2018</p>
                </div>
            </a>
        </div>
        <div className="talks-display">
            <a href="medium.com">
                <div className="container">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="talk-details">
                    <h2 className="talk-title">Web Accessibility</h2>
                    <p>DevCraft Conference</p>
                    <p>Nairobi, Kenya - 2018</p>
                </div>
            </a>
        </div>
    </div>
);

export default Talks;
