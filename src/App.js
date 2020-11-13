import React from 'react';
import './App.css';
import Expire from './components/Expire/Expire';

const App = () => (
  <div className="App">
    <Expire delay={3000}>Hey</Expire>
  </div>
);

export default App;
