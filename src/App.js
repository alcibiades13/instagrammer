import React, { Component } from 'react';
import PhotoList from './components/PhotoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Instagrammer</h2>
        </div>
        <div className="container">
          <input type="text" className="form-control" placeholder="Search something" />
        </div>
        <PhotoList />
      </div>
    );
  }
}

export default App;
