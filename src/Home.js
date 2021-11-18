import React from 'react';
import { NavBar } from './NavBar.js';
import './Home.css';



export class Home extends React.Component {
    render() {
        return (
            <div>
                <center> {/* What does this do? */}
                <h1>Callison's E-Commerce Site</h1>;
                <p>Shopping from home so you don't have to change out of your sweats!</p>
                <NavBar />
                <br></br>
                <img src="https://img.wallpapersafari.com/desktop/1680/1050/70/10/VQWxKr.jpg" width="500" height="242"/>
                </center>
            </div>
        );
    }
}