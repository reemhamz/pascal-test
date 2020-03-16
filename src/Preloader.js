import React, { Component } from 'react';
import './styles/App.scss';
import jump from 'jump.js';

class Preloader extends Component {
    render() {
        return (
            <div className="preloader">
                <p>Fetching photos...</p>
                <img className="pokeImg" src={require("./assets/camera.gif")} alt=""/>
            </div>
        );
    }
}

export default Preloader