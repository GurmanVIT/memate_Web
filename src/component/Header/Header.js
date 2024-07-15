import React from 'react';
import memate from '../../assets/img/memate.svg';
import { Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {

    return (
        <>
            <div>
                <div className='inner'>
                    <Navbar >
                        <Nav>
                            <Nav.Link href="#home">
                                <img src={memate} alt="Home" />
                            </Nav.Link>
                            <Nav.Link href="#features">
                                <div className='gradient-border'>
                                    <Button>Login</Button>
                                </div>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Header;