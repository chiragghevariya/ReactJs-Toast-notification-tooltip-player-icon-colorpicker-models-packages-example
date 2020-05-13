import React, { useState } from "react";
import { SketchPicker } from 'react-color';

function ReactColorPicker(){

      const [background,setBackground] = useState('#fff');

      const [showColorPicker,setShowColorPicker] = useState(false);

      const handleChangeComplete = (color) => {
        setBackground(color.hex);
      };

      const handleShowColorPicker = () =>{
                
         setShowColorPicker(!showColorPicker);
      };

    return (
        <div>
            <h1>React Color Picker && DatePickjer </h1>
            ------------
            <h2>Website:</h2>  
            <span>https://casesandberg.github.io/react-color/</span><br></br>
            ------------
            <h3>NPM:-</h3><span>npm install react-color --save</span><br></br>
            ------------------  <br></br>
            
                <input type="text" value={background} readOnly /> 

                <input type="date"  /> 
                <button onClick={handleShowColorPicker}>Select Color From Color Picker</button>
            
            {showColorPicker && 
            
            <SketchPicker
                color={ background }
                onChangeComplete={handleChangeComplete}
            />}
            
        </div>         
    );
}

export default ReactColorPicker;