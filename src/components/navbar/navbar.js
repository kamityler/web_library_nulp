import React, { Component } from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import About from '../about/about';
import Account from './../account/account';
import Main from './../main/main';

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container>
                            <Navbar.Brand as={Link} to='/main'>Library</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to='/account'>My account</Nav.Link>
                                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/account" element={<Account/>}/>
                        <Route path="/main" element={<Main/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default NavBar;