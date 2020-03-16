import React, { Component } from 'react';
import './styles/App.scss';
import Search from './Search';

class Gallery extends Component {
    render() {
        const getPhotos = this.props.photosProp;
        // console.log(getPhotos)
        return (
            <>
                <nav className="searchNavigation">
                    <Search />
            </nav>

            <section className="galleryDisplay wrapper">
                
                <ul className ="galleryList">
                    {
                        getPhotos.map(photo => {
                            // console.log(photo)
                            return (
                                <li className="galleryPhoto">
                                    <img src={photo.urls.regular} alt={photo.alt_description} key={photo.id}/>
                                </li>
                            )
                        })
                    }
                </ul>
                    
                    
                </section>
                </>
        );
    }
}

export default Gallery