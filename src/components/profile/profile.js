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
        and my core language is Javascript. Volunteer <a href="https://www.facebook.com/groups/DevCEldoret">Developer Lead at Facebook</a> - grown my community
        from <b>60 to 1.6k </b>developers. I share what I learn at <a href="yoo.com">meet ups</a> and through <a href="https://medium.com/@gertienyesh">tech articles</a>
            </p>
        </div>
        <div className="summary">
            <a href="">
                <p>12 <div className="dash"></div> Projects</p>
            </a>
            <a href="">
                <p>05 <div className="dash"></div> Interviews/Media</p>
            </a>
            <a href="">
                <p>09 <div className="dash"></div> Tech Articles</p>
            </a>
            <a href=""> 
                <p>08 <div className="dash"></div> Tech Talks</p>
            </a>
        </div>
        <div className="socials">
            <a href="https://github.com/gertie-sheshe">
                <i className="fa fa-github"></i><p className="social">Github</p>
            </a>
            <a href="https://twitter.com/gertiesheshe">
                <i className="fa fa-twitter"></i><p className="social">Twitter</p>
            </a>
            <a href="https://medium.com/@gertienyesh">
                <i className="fa fa-medium"></i><p className="social">Medium</p>
            </a>
        </div>
    </div>
);

export default Profile;
