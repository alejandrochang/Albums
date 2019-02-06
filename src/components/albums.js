import React, { Component } from 'react';
import EachAlbum from './eachAlbum';

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
        <div>
          {this.state.albums.map(album => {
            return <EachAlbum key={album.id} album={album}/>
          })}
        </div>
      );
    }
  }
}

export default Albums;