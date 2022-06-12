import React from 'react';
import { useState } from 'react';
import Logo from '../images/logo.svg';
import { Image, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import Cart from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';
import Menu from '../images/icon-menu.svg';
import MobileMenu from '../components/MobileMenu';

function Header() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <header className='px-lg-0 px-md-5 px-4 d-flex justify-content-between pt-3 pb-lg-4 pb-3'>
                <Navbar>
                    <Image
                        src={Menu}
                        className='menu mt-2 d-lg-none d-flex'
                        onClick={() => setShow(true)}
                    />
                    <Offcanvas responsive='lg' placement='start' show={show}>
                        <MobileMenu show={() => setShow(false)} />
                    </Offcanvas>

                    <Navbar.Brand href='#'>
                        <Image src={Logo} className='ms-lg-0 ms-3' />
                    </Navbar.Brand>

                    <Nav id='desktop-nav' className='d-lg-flex d-none ms-4'>
                        <Nav.Item className='px-2'>
                            <Nav.Link href='#'>Collections</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='px-2'>
                            <Nav.Link href='#'>Men</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='px-2'>
                            <Nav.Link href='#'>Women</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='px-2'>
                            <Nav.Link href='#'>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='px-2'>
                            <Nav.Link href='#'>Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>

                <div className='cart-menu py-lg-2 py-3'>
                    <Image src={Cart} className='cart me-lg-5 me-4' />
                    <Image src={Avatar} className='avatar' />
                </div>
            </header>
        </div>
    );
}

export default Header;
