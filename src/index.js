import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterApp2 from './CounterApp2';
import ScrollSpy from './components/ScrollSpy';

ReactDOM.render(
  <React.StrictMode>
    <ScrollSpy />
  </React.StrictMode>,
  document.getElementById('root')
);