import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav layout-grid-nav bg-dark flex-column display-nav">
                <Link to="/" className="nav-item text-decoration-none">
                    <i className="icon-notes text-white nav-itxt"></i>
                    <h6 className="h6 text-white text-center">Notes</h6>
                </Link>                
                <Link to="/createnote" className="nav-item text-decoration-none">
                    <i className="icon-create-note text-white nav-itxt"></i>
                    <h6 className="h6 text-white">Create Note</h6>
                </Link>
            
                <Link to="/createuser" className="nav-item text-decoration-none">
                    <i className="icon-create-user text-white nav-itxt"></i>
                    <h6 className="h6 text-white">Create User</h6>
                </Link>
                <Link to="/" className="nav-item text-decoration-none">
                    <i className="icon-contact-me text-white nav-itxt"></i>
                    <h6 className="h6 text-white">Contact Me</h6>
                </Link>
            </nav>
        )
    }
}
