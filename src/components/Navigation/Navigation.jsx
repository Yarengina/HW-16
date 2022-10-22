// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import { NavLink } from 'react-router-dom'

import './Navigation.css'

function Navigation() {
    return (
        <nav className="LinkField">
            <NavLink className="Link" to="/" data-testid="login-link">
                <span>Login</span>
            </NavLink>
            <NavLink className="Link" to="/about" data-testid="about-link">
                <span>About</span>
            </NavLink>
            <NavLink className="Link" to="/order" data-testid="order-link">
                <span>Order</span>
            </NavLink>
        </nav>
    )
}

export default Navigation
