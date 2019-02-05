import React, { Component } from 'react';
import Albums from './components/albums';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Albums />
      </div>
    );
  }
}

export default App;
