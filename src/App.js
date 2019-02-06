import React, { Component } from 'react';
import Home from './components/home';
import Users from './components/users';
import {Switch, HashRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Home exact path="/" component={Home} />
            <Users exact path="/users" component={Users} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
