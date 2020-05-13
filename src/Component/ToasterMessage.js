import React from "react";
import {ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToasterMessage(){

    const handleNotification = () => {
        console.log("IN");
        toast("Default Notification !");

        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
  
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_LEFT
        });
  
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT
        });
  
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER
        });
  
        toast("Custom Style Notification with css class!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'foo-bar'
        });
    }
    return (

        
        <div>
            <h1>React toastify message</h1>
            ------------
            <h2>Website:</h2>  
            <span>https://fkhadra.github.io/react-toastify/installation</span><br></br>
            ------------
            <h3>NPM:-</h3><span>npm install --save react-toastify</span><br></br>

            <button onClick={handleNotification}>Click To Fire Notification</button>
            <ToastContainer />
        </div>
    );
}

export default ToasterMessage;