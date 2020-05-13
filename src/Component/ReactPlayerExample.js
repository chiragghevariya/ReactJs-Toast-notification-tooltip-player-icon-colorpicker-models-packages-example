import React from "react";
import ReactPlayer from 'react-player';
import { Spinner } from 'react-bootstrap';

function ReactPlayerExample(){

    return (

        <div>
            <h1>React Player && Spinner Loader Indicator</h1>
            ------------
            <h2>Website:</h2>  
            <span>https://github.com/CookPete/react-player</span><br></br>
            ------------
            <h3>NPM:-</h3><span>npm install react-player --save</span><br></br>
            ------------------

            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>

            <>
                <Spinner animation="border" variant="primary" />
                <Spinner animation="border" variant="secondary" />
                <Spinner animation="border" variant="success" />
                <Spinner animation="border" variant="danger" />
                <Spinner animation="border" variant="warning" />
                <Spinner animation="border" variant="info" />
                <Spinner animation="border" variant="light" />
                <Spinner animation="border" variant="dark" />
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
                </>
            <br></br>
            <div className='player-wrapper' style={{textAlign:"center"}}>
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='50%'
                height='50%'
                />
            </div>
        </div>
    );
}

export default ReactPlayerExample;