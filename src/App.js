import React from 'react';
import './App.css';
import HomePage from './Project/HomePage';

function App(props) {
  return (
    <HomePage state={props.state} dispatch={props.dispatch} />
  );
}

export default App;