import React, { Component } from 'react';
import User from './eachUser';
const axios = require('axios');

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {users: [], isLoading: true }
  }


  componentDidMount(){
    this.getUsers();
  }

  getUsers(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(result => this.setState({
      users: result.data,
      isLoading: false
    }))
    .catch(err => console.log(err));
  }

  render() {
    const { users, isLoading } = this.state;
    if (isLoading) {
      return(
        <div>...Loading</div>
      );
    } else {
      return (
        <div>
          {users.map(user => {
            return <User key={user.id} user={user}/>
          })}
      </div>
      );
    }
  }
}

export default Users;