import React from 'react';
import './App.css';

function Footer(){
    const year = new Date().getFullYear();
    return (
    <div>
        <h1 className = "footer" >Copyright Neel Bhavsar ⓒ {year}</h1>
    </div>);
  
}

export default Footer;