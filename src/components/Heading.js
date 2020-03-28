import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
function Heading(){
    return(
        <div>
        <Jumbotron fluid style = {{'width': '100%', 'background': '#50A3A2'}} >
            <h1 style = {{'font-weight':'bold'}}>Smart Attendance Beta</h1>
            <p>
                This is a simple tool for employees attending meetings remotely. This web application identifies your employment credentials by capturing your image and verifies it through a back-end algorithm that used supervised Learning AI Models such as Convolution Neural Networks.
            </p>
            <p></p>
            <p>
                <Button variant="primary">Proceed</Button>
            </p>
        </Jumbotron>
    </div>

    );
}
export default Heading;