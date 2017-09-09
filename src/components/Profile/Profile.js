import React, { Component } from "react";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Victor Velazquez",
      email: "velazquezgaspar16@gmail.com",
      avatar: "https://avatars2.githubusercontent.com/u/969187?v=4&s=460"
    }

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAvatar = this.onChangeAvatar.bind(this);
  }

  onChangeName({target: { value }}) {
    this.setState({ name: value });
  }

  onChangeEmail({target: { value }}) {
    this.setState({ email: value });
  }

  onChangeAvatar({target: { value }}) {
    this.setState({ avatar: value });
  }

  render() {
    return (
      <section style={ { maxWidth: 200 } }>
        <img src={ this.state.avatar }   width="200px"/>
        <p>{ this.state.name }</p>
        <p>{ this.state.email }</p>
        <input type="text" name="name" onChange={ this.onChangeName } value={ this.state.name }/>
        <input type="email" name="email" onChange={ this.onChangeEmail } value={ this.state.email }/>
        <input type="text" name="avatar" onChange={ this.onChangeAvatar }  value={ this.state.avatar}/>
      </section>
    );
  }
};

export default Profile;
