import React, { Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      collection: [],
    }
  }


  componentDidMount() {
    const APIKey = "oXWNN3H3eBxih1adiK0VE1G9BG9XhdURrosI-WlOpzk";

    axios({
      method: 'GET',
      // url: 

    })
  }

    render() {
        return (
            <div className="App">
            <form action="">
              <input type="text" name="query" placeholder="Query" />
              <select name="collections" id="collections">
                <option value="wallpapers">Wallpapers</option>
                <option value="nature">Nature</option>
                <option value="film">Film</option>
                <option value="fashion">Fashion</option>
                <option value="foodndrink">Food & Drink</option>
                <option value="people">People</option>
                <option value="animals">Animals</option>

              </select>
                  </form>
            </div>
        );
    }
}

export default App;
