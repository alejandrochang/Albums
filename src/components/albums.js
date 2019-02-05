import React, { Component } from 'react';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [], isLoading: true };
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(result => result.map(albums => (
      {
        userId: `${albums.userId}`,
        title: `${albums.title}`
      }
    )))
    .then(albums => this.setState({
      albums: albums,
      isLoading: false
    }))
    .catch(err => console.log(err));
  }

  render() {
    if (this.state.isLoading) {
      return(
        <div>...Loading</div>
      );
    } else {
      return (
        <div className="ui inverted segment">
          <div className="ui inverted relaxed divided list">

            <div className="item">
              <div className="content">
                <div className="ui blue inverted header">
                  Snickerdoodle
              </div>
                An excellent companion
            </div>
            </div>

          </div>
        </div>
      );
    }
  }
}

export default Albums;