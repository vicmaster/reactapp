import React, { Component } from "react";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Victor Velazquez",
      email: "velazquezgaspar16@gmail.com",
      avatar: "https://avatars2.githubusercontent.com/u/969187?v=4&s=460"
    }
  }

  render() {
    return (
      <section style={ { maxWidth: 200 } }>
        <img src={ this.state.avatar }   width="200px"/>
        <p>{ this.state.name }</p>
        <p>{ this.state.email }</p>
      </section>
    );
  }
};

export default Profile;
