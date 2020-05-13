import React from "react";
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';

function ToolTipExample(){

    return (

        <div>
            <h1>React Tooltp</h1>
            ------------
            <h2>Website:</h2>  
            <span>https://tvkhoa.github.io/testlib/</span><br></br>
            ------------
            <h3>NPM:-</h3><span>npm install --save react-tippy</span><br></br>
            ------------------  

            <Tooltip
                    title="Welcome to React"
                    position="left"
                    >
                    <p>
                        Click here to show popup
                    </p>
            </Tooltip>
        </div>
    );
}

export default ToolTipExample;