import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="layout-grid-header bg-dark text-white">
                <div className="container margin-header display-flex">
                    <i className="icon-file-notes iheader"></i>
                    <h1 className="display-4">NotesApp</h1>
                </div>
            </header>
        )
    }
}
