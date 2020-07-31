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
            <p>4 <div className="dash"></div> Projects</p>
            <p>5 <div className="dash"></div> Interviews/Media</p>
            <p>6 <div className="dash"></div> Tech Articles</p>
            <p>7 <div className="dash"></div> Tech Talks</p>
        </div>
    </div>
);

export default Profile;
