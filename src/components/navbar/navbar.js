import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
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
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
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