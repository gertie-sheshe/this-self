import React from 'react';
import './profile.scss'

const Profile = () => (
    <div className="profile">
        <div className="image-name">
            <div>
                <img alt="Avatar" src={require('../../assets/gertie.jpg')}/>
            </div>
            <div className="name">
                <h1 className="name-text">Gertrude Nyenyeshi</h1>
            </div>
        </div>
        <div className="description">
            <p className="description-text"> 
            Software Developer, Community Manager and
        Technical Writer. My experience has mostly been
        with Front End work (ReactJS, EmberJS, AngularJS)
        and my core language is Javascript. Volunteer
        Developer Lead at Facebook - grown my community
        from 60 to 1.6k developers. I share what I learn at meet ups and through tech articles
            </p>
        </div>
        <div className="summary">
            <a href="test.com">
                <p>4 <div className="dash"></div> Projects</p>
            </a>
            <a href="we.com">
                <p>5 <div className="dash"></div> Interviews/Media</p>
            </a>
            <a href="yay.com">
                <p>6 <div className="dash"></div> Tech Articles</p>
            </a>
            <a href="yoo.com"> 
                <p>7 <div className="dash"></div> Tech Talks</p>
            </a>
        </div>
        <div className="socials">
            <a href="me.com">
                <i className="fa fa-github"></i><p className="social">Github</p>
            </a>
            <a href="you.com">
                <i className="fa fa-twitter"></i><p className="social">Twitter</p>
            </a>
            <a href="yes.com">
                <i className="fa fa-medium"></i><p className="social">Medium</p>
            </a>
        </div>
    </div>
);

export default Profile;
