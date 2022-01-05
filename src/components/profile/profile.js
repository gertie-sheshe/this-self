import React, { Component } from "react";
import "./profile.scss";

class Profile extends Component {
  state = {
    class: "img-loading",
  };

  loadImage = () => {
    this.setState({
      class: "img-loaded",
    });
  };

  render() {
    return (
      <div className="profile">
        <div className="image-name">
          <div>
            <img
              className={this.state.class}
              onLoad={this.loadImage}
              alt="Avatar"
              src={require("../../assets/gertie.png")}
            />
          </div>
          <div className="name">
            <h1 className="name-text">Gertrude Nyenyeshi</h1>
          </div>
        </div>
        <div className="description">
          <p className="description-text">
            Software Developer (Javascript). Developer Community Manager.
            Occasional Technical Writer. Mentor. Experience working with
            Javascript and its frameworks/libraries (ReactJS, EmberJS, MongoDB,
            ChartJS, NodeJS, Redux etc) Volunteer{" "}
            <a href="https://www.facebook.com/groups/DevCEldoret">
              Developer Lead at Facebook
            </a>{" "}
            - grown my community from <b>60 to 1.6k </b>developers. I share what
            I learn at meet ups and through{" "}
            <a href="https://medium.com/@gertienyesh">tech articles</a>
          </p>
        </div>
        <div className="summary">
          <p>12 --- Projects</p>
          <p>05 --- Interviews/Media</p>
          <p>09 --- Tech Articles</p>
          <p>10 --- Tech Talks</p>
        </div>
        <div className="socials">
          <a href="https://github.com/gertie-sheshe">
            <i className="fa fa-github"></i>
            <p className="social">Github</p>
          </a>
          <a href="https://twitter.com/gertiesheshe">
            <i className="fa fa-twitter"></i>
            <p className="social">Twitter</p>
          </a>
          <a href="https://medium.com/@gertienyesh">
            <i className="fa fa-medium"></i>
            <p className="social">Medium</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
