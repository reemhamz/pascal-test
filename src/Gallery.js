import React, { Component } from 'react';
import './styles/App.scss';

class Gallery extends Component {
    render() {
        const getPhotos = this.props.photosProp;
        // console.log(getPhotos)
        return (
            <section className="galleryDisplay wrapper">
                
                <ul className="wrapper">
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
        );
    }
}

export default Gallery