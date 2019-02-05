import React, { Component } from 'react';

class Albums extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="ui inverted segment">
        <div className="ui inverted relaxed divided list">
          <div className="item">
            <div className="content">
              <div className="header">
                Snickerdoodle
              </div>
              An excellent companion
            </div>
        </div>
        
        <div className="item">
            <div className="content">
              <div className="header">
                Poodle
              </div>
              A poodle, its pretty basic
            </div>
          </div>
            <div className="item">
              <div className="content">
                <div className="header">Paulo</div>
                He's also a dog
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;