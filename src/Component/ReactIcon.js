import React from 'react';
import { BsFillAspectRatioFill,BsFillAlarmFill } from "react-icons/bs";
import { FiAirplay } from "react-icons/fi";

const ReactIcon = () =>{

    return (

        <div>
            <h1>React Icon</h1>
            ------------
            <h2>Website:</h2>  
            <span>https://react-icons.github.io</span><br></br>
            ------------
            <h3>NPM:-</h3><span>npm install react-icons --save</span><br></br>

            <BsFillAspectRatioFill color="red" size="5rem" />
            <BsFillAlarmFill color="red" size="5rem"/>
            <FiAirplay color="red" size="5rem" />
        </div>
        
    );
}

export default ReactIcon;