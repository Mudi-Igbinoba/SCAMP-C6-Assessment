import React from 'react';
import ImageGallery from 'react-image-gallery';
import { webImages } from './Images';
import Lightbox from './Lightbox';

function WebCarousel({}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className=''>
            <ImageGallery
                showFullscreenButton={false}
                showNav={false}
                showPlayButton={false}
                items={webImages}
                onClick={openModal}
            />

            <Lightbox show={modalIsOpen} close={closeModal} />
        </div>
    );
}

export default WebCarousel;
