import React, { Component} from 'react';
import './styles/App.scss';
// import {
//   BrowserRouter as Router,
//   Route, Link
// } from 'react-router-dom';
import axios from 'axios';
import Gallery from './Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      collection: "",
      collectData: "",
      imageURL: "",
      apiResponse:[]
      
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
          apiResponse: responseValues
        })
        console.log(this.state.apiResponse)
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
    
        const photos = this.state.apiResponse
    
        return (
          <div className="App">
            <div className="search">
                <img src={require("./assets/logo.png")} alt="Site logo of a purple chameleon" className="logo"/>
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
              
              <main className="gallery">
                {
                  photos.map(photo =>{
                    return (
                      <Gallery key={photo.id} photoProp={photo}/>
                    )
                  })
                }
                
              </main>
            </div>
            
            </div>
        );
    }
}

export default App;
