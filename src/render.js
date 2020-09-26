import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import { updateMessage } from './Redux/State';
import {SendMessage} from './Redux/State';

export let rerenderPage = () => {
  ReactDOM.render(
    <App messages={state}
      updateMessage={updateMessage}
      SendMessage={SendMessage} />,
    document.getElementById('root')
  );
}
serviceWorker.register();
