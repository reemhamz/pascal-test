import React, { Component} from 'react';
import './styles/App.scss';
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
            <div className="search">
          <h1>Image <span>search</span></h1>
            <form action="" class="wrapper">
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
              <button type="submit">Search</button>
                  </form>
            </div>
            
            </div>
        );
    }
}

export default App;
