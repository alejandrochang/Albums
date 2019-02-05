import React, { Component } from 'react';

class eachAlbum extends Component {
  constructor(props) {
    super(props);
    // console.log('p', props);
  }

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted relaxed divided list">

          <div className="item">
            <div className="content">
              <div className="ui blue inverted header">
                {this.props.album.title}
              </div>
                {this.props.album.id}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default eachAlbum;
