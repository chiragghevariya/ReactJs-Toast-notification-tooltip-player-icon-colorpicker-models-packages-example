import React from 'react';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home </Link></li>  
        <li><Link to="/react-icon">React Icon</Link></li>  
        <li><Link to="/react-toastify">React Toast Notification</Link></li>  
        <li><Link to="/react-bootstrap-model">React-bootstrap-model</Link></li>  
        <li><Link to="/react-tootip">React Tooltip</Link></li>  
        <li><Link to="/react-color-picker">React Color Picker</Link></li> 
        <li><Link to="/react-player">React Player & Loader Indicator</Link></li> 
      </ul>
    </div>
  );
}

export default App;
