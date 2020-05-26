import React from 'react';
import './search-box.css';
class SearchBox extends React.Component {
  render() {
    return (
      <input
        className='search'
        type='text'
        onChange={this.props.handleChange}
        placeholder={this.props.placeholder}
      ></input>
    );
  }
}

export default SearchBox;
