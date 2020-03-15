import React, { Component} from 'react';
import './styles/App.scss';
// import {
//   BrowserRouter as Router,
//   Route, Link
// } from 'react-router-dom';
import axios from 'axios';
import Gallery from './Gallery';
import Preloader from './Preloader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      querySubmitted: false,
      loading: false,
      collectionName: "Collections",
      collection: -1,
      collectData: "",
      imageURL: "",
      apiResponse: [],
      currentPage: 1,

      
    }
  }

// Life cycle that includes the API call
  componentDidMount() {

    const searchCall = (searchData) => {
      const apiKey = "oXWNN3H3eBxih1adiK0VE1G9BG9XhdURrosI-WlOpzk";
      axios({
        method: "GET",
        url: `https://api.unsplash.com/search/photos?page=1&query=${this.state.searchQuery}&client_id=${apiKey}`,
        dataResponse: "json",
        params: {
          per_page: 15,
          page: this.state.currentPage,
          collections: this.state.collection,
          query: this.state.searchQuery
        }
      }).then((response) => {
        const responseObjects = response.data.results;
        const responseValues = Object.values(responseObjects);
        
        this.setState({
          apiResponse: responseValues,
          
        })

        
        
      }).catch(error=>
        console.log(error)
      )
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
        // console.log(this.state.searchQuery)

        this.setState({
          querySubmitted: true,
          loading: true
        })

        setTimeout(() => {
          this.setState({
            loading: false
          })
        }, 3600)

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
              
            </div>
              
            {
              this.state.loading === true ?
                (
                  <>
                    <Preloader />
                  </>
                
                )
              :
                this.state.querySubmitted === true ?
                  (
                <main className="gallery">
                    <Gallery photosProp={photos}/>
                </main>
                  ) :
                  console.log("hello")

            }
                
            
            </div>
        );
    }
}

export default App;
