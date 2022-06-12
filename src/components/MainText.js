import React from 'react';
import Minus from '../images/icon-minus.svg';
import Plus from '../images/icon-plus.svg';
import { Button, Image } from 'react-bootstrap';
import CartWhite from '../images/cart-white.svg';

function MainText() {
    return (
        <div className=' mb-lg-5 pe-lg-0 ps-lg-5 pe-3 align-self-center ms-lg-5 ms-0 py-lg-4 py-3  ps-4 pe-1'>
            <h6 className='text-uppercase lh-lg'>Sneaker Company</h6>

            <h1 className=''>
                Fall Limited Edition
                <br />
                Sneakers
            </h1>

            <p className='descript pe-xl-5 pe-lg-4  text-wrap pt-3 pb-1'>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
            </p>

            <div className='d-flex flex-lg-column flex-row justify-content-between align-items-lg-start align-items-center'>
                <h3>
                    $125.00 <span className='discount py-1 px-2'>50%</span>
                </h3>

                <p className='strikethrough  mt-lg-0 mt-2 text-decoration-line-through'>
                    $250.00
                </p>
            </div>

            <div className='btn-div d-flex flex-lg-row flex-wrap flex-column align-items-lg-start align-items-center mt-lg-2 mt-3'>
                <div className='amount px-lg-3 px-4 d-flex justify-content-between align-items-center'>
                    <Image src={Minus} className='minus' />
                    <p className='quantity mt-3 lh-sm'>0</p>
                    <Image src={Plus} className='plus' />
                </div>

                <Button className='cart-btn'>
                    <Image src={CartWhite} className=' mb-1 white-cart' />
                    <span className='cart-text'>Add to cart</span>
                </Button>
            </div>
        </div>
    );
}

export default MainText;
