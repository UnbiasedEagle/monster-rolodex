import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  state = {
    monsters: [],
    searchField: '',
  };
  //LifeCycle Method that gets called when component gets rendered
  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState({ monsters: data });
  }
  searchMonsterHandler = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.searchMonsterHandler}
          placeholder={'search monsters'}
        ></SearchBox>
        <CardList monsters={filteredMonster}></CardList>
      </div>
    );
  }
}

export default App;
