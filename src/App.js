import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
  };
  //LifeCycle Method that gets called when component gets rendered
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({ monsters: data });
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
