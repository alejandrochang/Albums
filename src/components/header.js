import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="ui inverted segment">
        <h4 className="ui red inverted header">
          Albums
        </h4>
      </div>
    );
  }
}

export default Header;