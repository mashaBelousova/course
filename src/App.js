import './App.scss';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import React, {Component} from 'react';

class App extends Component {
  state = {
    users: [
      {id: '1', name: 'User 1'},
      {id: '2', name: 'User 2'}
    ]
  };

  switchNameHandler = (userId, event) => {
    const users = [];
    this.state.users.forEach(
      user => users.push({id: user.id , name: user.id === userId ? event.target.value: user.name}));
    this.setState({users});
  };

  render() {
    return(
      <div className="app">
        <div className="app__user">
          <UserInput user={this.state.users[0]} click={this.switchNameHandler}/>
          <UserOutput  user={this.state.users[0]} />
        </div>
        <div className="app__user">
          <UserInput user={this.state.users[1]} click={this.switchNameHandler}/>
          <UserOutput user={this.state.users[1]}/>
        </div>
      </div>
    )
  }
}

export default App;
