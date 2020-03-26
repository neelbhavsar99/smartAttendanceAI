import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Footer';
import Heading from "./components/Heading";

import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Heading />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My awesome react App. How you doing today?
          NB
        </p>
        
        <Footer/>
        
    
      </header>
    </div>
  );
}
export default App;
