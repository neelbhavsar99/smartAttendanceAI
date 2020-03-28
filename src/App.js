import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer';
import Heading from "./components/Heading";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Webcam from 'react-webcam';
import WebcamCredentials from './components/WebcamCredentials';

import Footer from './components/Footer';
const WebcamComponent = () => <Webcam/>;

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the React App.
        </p>  
      </header>
      <Heading></Heading>
      
      <p>Please verify your login details</p>

      <div style = {{'text-align':'center'}}>
        <Webcam style = {{'width':'75%', 'border': '1px solid blue'}}/>
        {/* https://www.npmjs.com/package/react-webcam */}
        {/* https://blog.logrocket.com/responsive-camera-component-react-hooks/ *
        Uses ReactHooks, useState, useEffect, gets media stream, */}
        <WebcamCredentials/>
      </div>
    
      
      <Footer/>
    </div>
  );
}
export default App;
