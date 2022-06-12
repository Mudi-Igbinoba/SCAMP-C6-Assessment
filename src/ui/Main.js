import React, { useState } from 'react';
import Lightbox from '../components/Lightbox';
import MainText from '../components/MainText';
import MobileCarousel from '../components/MobileCarousel';
import WebCarousel from '../components/WebCarousel';

function Main() {
    return (
        <div className='py-lg-4 py-md-0 px-xl-5 px-md-3 pb-3'>
            <main className=' w-md-0 w-100 d-md-flex d-block flex-lg-nowrap pt-md-5 pb-5 pt-1 h-100 justify-content-lg-between'>
                <div className='d-md-block d-none align-self-start'>
                    <WebCarousel />
                </div>

                <div className='d-md-none d-block'>
                    <MobileCarousel />
                </div>

                <MainText />
            </main>
        </div>
    );
}

export default Main;
