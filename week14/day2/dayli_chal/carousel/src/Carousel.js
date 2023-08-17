import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import hanck from './images/hanck.jpg'
import japan from './images/japan.webp'
import lasvegas from './images/lasvegas.webp'
import macoa from './images/macoa.webp'


class DemoCarousel extends Component {

    render() {

        return (
            
            <Carousel>
                
                <div>
                    <img src={hanck} />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src={japan} />
                    <p className="legend"> Japan</p>
                </div>
                <div>
                    <img src={lasvegas} />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src={macoa} />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;