import React, { Component } from 'react'
import Header from '../components/header.jsx'
import Nav from '../components/nav.jsx';

class LayoutPrincipal extends Component {
  render() {
    return (
      <div className="layout-grid">
        <Header/>
        <Nav/>
        <div className="layout-grid-container">{this.props.children}</div>
      </div>
    );
  }
}

export default LayoutPrincipal;