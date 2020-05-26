import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='logo
                            '/>
                        </a>

                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                        <NavLink className="navbar-item" exact to="/">
                            Home
                        </NavLink>
                    </div>

                        <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <NavLink className="button is-primary" exact to='/join'>
                                <strong>Sign up</strong>
                            </NavLink>
                            <NavLink className="button is-light" exact to='/login'>
                                Log in
                            </NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}