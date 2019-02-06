import React, { Component } from 'react';
import Home from './components/home';
import {Switch, HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Home path="/" component={Home} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
