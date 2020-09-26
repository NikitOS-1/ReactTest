import React from 'react';
import './App.css';
import HomePage from './Project/HomePage';

function App(props) {
  return (
    <HomePage messages={props.messages} 
                updateMessage={props.updateMessage} 
                SendMessage={props.SendMessage}/>
  );
}

export default App;