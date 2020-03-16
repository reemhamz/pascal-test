import React, { Component} from 'react';
import './styles/App.scss';
// import {
//   BrowserRouter as Router,
//   Route, Link
// } from 'react-router-dom';
import axios from 'axios';
import Search from './Search';
import Gallery from './Gallery';
import Preloader from './Preloader';
import jump from 'jump.js';


class App extends Component {
    render() {
        return (
            <div className="App">
                  <Search />
            </div>
        );
    }
}

export default App;
