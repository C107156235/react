import logo from './logo.svg';
import './App.css';
import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car2!</h2>;
  }
};

class App extends React.Component {
  render() {
    return <div><h2>Hi, I am a Car!</h2>
	<Car /></div>;
  }
};

export default App;
