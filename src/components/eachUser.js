import React, {Component} from 'react';

class eachUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, phone, username, email, website} = this.props.user;
    return (
      <div className="ui container">
        <div className="ui list">
          <div className="item">
            <i className="users icon" />
            <div className="content">{name}</div>
          </div>
          <div className="item">
            <i className="phone icon" />
            <div className="content">{phone}</div>
          </div>
          <div className="item">
            <i className="mail icon" />
            <div className="content">
              <a href="mailto:jack@semantic-ui.com">{email}</a>
            </div>
          </div>
          <div className="item">
            <i className="linkify icon" />
            <div className="content">
              <a href="http://www.semantic-ui.com">{website}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default eachUser;
