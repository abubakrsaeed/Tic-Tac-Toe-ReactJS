import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {

        return (
            <>
                <Navbar sticky="top" dark expand="md">
                    
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="https://images-na.ssl-images-amazon.com/images/I/411RqsooQ3L.png" alt="TicTacToe Game" height="40" width="40" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/play">
                                        <span className="fa fa-info fa-lg"></span> Play Game
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/guide">
                                        <span className="fa fa-info fa-lg"></span> How to Play?
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/feedback">
                                        <span className="fa fa-list fa-lg"></span> Feedback
                                    </NavLink>
                                </NavItem>
                                <NavItem className="ml-auto">
                                    <NavLink className="nav-link" to="/login">
                                        <span className="fa fa-address-card fa-lg"></span> Logout
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
            </>
        );
    }
}

export default Header;