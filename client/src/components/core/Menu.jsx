import React from 'react';

import {
    Container, 
    Nav, 
    Navbar
} from 'react-bootstrap';

function Menu() {
  return (
    <>
        <Navbar expand="xl" data-bs-theme="dark" className='navbar p-xl-0 p-2 pt-3 pb-4 bg-success'>
            <Container className='p-xl-0'>
                <Navbar.Brand className='me-xl-5 me-0' href="/"><b>Nákupní centra</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home"><i class="fa-solid fa-house"></i> Domů</Nav.Link>
                        <Nav.Link href="/shoppingMalls"><i class="fa-solid fa-basket-shopping"></i> Nákupní centra</Nav.Link>
                        <Nav.Link href="/about"><i class="fa-solid fa-lightbulb"></i> O produktu</Nav.Link>                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Menu;