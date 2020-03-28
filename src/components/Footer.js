import React from 'react';
import '../App.js';
import '../style/Footer.css';

function Footer(){
    const year = new Date().getFullYear();
    return (
    <div className = "footer">
        <h1>Copyright Neel Bhavsar ⓒ {year}</h1>
    </div>);
}

export default Footer;