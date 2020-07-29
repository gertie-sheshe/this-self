import React from 'react';
import './profile.scss'

const Profile = () => (
    <div className="profile">
        <div className="image-name">
            <div>
                <img alt="Avatar" src={require('../../assets/gertie.jpg')}/>
            </div>
            <div className="name">
                <p className="name-text">Gertrude Nyenyeshi</p>
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
            <p>4 --- Projects</p>
            <p>5 --- Interviews/Media</p>
            <p>6 --- Tech Articles</p>
            <p>7 --- Tech Talks</p>
        </div>
    </div>
);

export default Profile;
