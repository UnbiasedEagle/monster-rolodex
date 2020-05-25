import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    monsters: [{ name: 'Saurabh' }, { name: 'Ravi' }, { name: 'Shubham' }],
  };
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
