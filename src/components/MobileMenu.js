import React from 'react';
import Close from '../images/icon-close.svg';
import { Image, Nav, Offcanvas } from 'react-bootstrap';

function MobileMenu({ show }) {
    return (
        <div>
            <Offcanvas.Header>
                <Image
                    src={Close}
                    className='close mt-2 ms-2 d-lg-none d-flex'
                    onClick={show}
                />
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav id='mobile-nav' className='pt-2'>
                    <Nav.Item className='px-2 py-1'>
                        <Nav.Link href='#'>Collections</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='px-2 py-1'>
                        <Nav.Link href='#'>Men</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='px-2 py-1'>
                        <Nav.Link href='#'>Women</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='px-2 py-1'>
                        <Nav.Link href='#'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='px-2 py-1'>
                        <Nav.Link href='#'>Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
        </div>
    );
}

export default MobileMenu;
