import React from 'react';
import { Carousel } from 'react-bootstrap';
import { sneakerImages } from './Images.js';
import Next from '../images/icon-next.svg';
import Previous from '../images/icon-previous.svg';

function MobileCarousel() {
    let nextIcon = (
        <span aria-hidden='true' className='carousel-control-next-icon'>
            <img src={Next} className='next' />
        </span>
    );
    let prevIcon = (
        <span aria-hidden='true' className='carousel-control-prev-icon'>
            <img src={Previous} className='previous' />
        </span>
    );

    return (
        <div>
            <Carousel
                nextIcon={nextIcon}
                indicators={false}
                prevIcon={prevIcon}
                fade>
                {sneakerImages.map((e) => (
                    <Carousel.Item key={e.id}>
                        <img
                            className='d-block w-100'
                            src={e.src}
                            alt={e.alt}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default MobileCarousel;
