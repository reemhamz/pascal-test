import React, { Component } from 'react';
import './styles/App.scss';
import Masonry from 'react-masonry-css';

class Gallery extends Component {
    render() {
        const getPhotos = this.props.photoProp;
        // console.log(getPhotos)
        return (
            <section className="galleryDisplay">
                <div className="galleryPhotos">

                    <img src={getPhotos.urls.regular} alt={getPhotos.alt_description}/>
                    
                </div>
            </section>
        );
    }
}

export default Gallery