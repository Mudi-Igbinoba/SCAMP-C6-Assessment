import Modal from 'react-modal';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { webImages } from './Images';

const customStyles = {
    content: {
        top: '50%',
        left: '55%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        background: 'transparent',
    },

    overlay: {
        background: 'rgba(0, 0, 0, 0.75)',
    },
};

function Lightbox({ show, close }) {
    return (
        <Modal
            isOpen={show}
            onRequestClose={close}
            style={customStyles}
            contentLabel='Example Modal'>
            <div id='lightbox' className='w-75'>
                <button className='p-2 py-3' onClick={close} id='close-btn'>
                    <div className='p-2'></div>
                </button>
                <ImageGallery
                    showFullscreenButton={false}
                    showNav={false}
                    showPlayButton={false}
                    items={webImages}
                />
            </div>
        </Modal>
    );
}

export default Lightbox;
