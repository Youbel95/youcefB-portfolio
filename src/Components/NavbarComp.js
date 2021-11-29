import React, { Component } from 'react'
import logo from '../img/logo.png';
import linkedin from '../img/linkedin-icon.png';
import facebook from '../img/facebook-icon.png';
import github from '../img/github-icon.png';
import twitter from '../img/twitter-icon.png';
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Contact';
import About from './About'
import Articles from './Articles';

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#"><img className="logo" src={logo} alt='logo...'></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Me</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Portfolio</Nav.Link>
                                <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
                                
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button className="searchButton" ><i class="fas fa-search"></i></Button>
                            </Form>
                        </Navbar.Collapse>






                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/articles">
                            <Articles />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router >
        )
    }
}
