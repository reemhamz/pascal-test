import React, { Component} from 'react';
import './styles/App.scss';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      collection: "",
      collectData: "",
      imageURL: "",
      apiResponse:""
      
    }
  }

// Life cycle that includes the API call
  componentDidMount() {

    const searchCall = (searchData) => {
      const apiKey = "oXWNN3H3eBxih1adiK0VE1G9BG9XhdURrosI-WlOpzk";
      axios({
        method: "GET",
        url: `https://api.unsplash.com/search/photos?page=1&query=${this.state.searchQuery}&client_id=${apiKey}`,
        dataResponse: "json"
      }).then((response) => {
        const responseObjects = response.data.results;
        const responseValues = Object.values(responseObjects);
        

        this.setState({
          apiResponse:responseValues
        })
      })
    }
        this.setState({
          collectData: searchCall
        })
    
  }


  render() {
      
     // function for updating the search query
    const queryChange = (e) => {
      e.preventDefault();
      this.setState({
        searchQuery: e.target.value
      })
      }

     // function for updating the collections drop down menu
    const selectChange = (e) => { 
        
      }

     // function for hitting submit
      const querySubmit = (e) => {
        e.preventDefault();
        console.log(this.state.searchQuery)
        return this.state.collectData();
      }
    
    
        return (
          <div className="App">
            <div className="search">
          <h1>Image <span>search</span></h1>
            <form action="" className="wrapper">
                <input type="text" name="query" placeholder="Query" onChange={queryChange}/>
                <select name="collections" id="collections" onChange={selectChange}>
                <option value="wallpapers">Wallpapers</option>
                <option value="nature">Nature</option>
                <option value="film">Film</option>
                <option value="fashion">Fashion</option>
                <option value="foodndrink">Food & Drink</option>
                <option value="people">People</option>
                <option value="animals">Animals</option>
              </select>
                <button type="submit" onClick={querySubmit}>Search</button>
              </form>
              
              {
                this.state.apiResponse.map((cats) => {
                  return cats
                })
              }
            </div>
            
            </div>
        );
    }
}

export default App;
