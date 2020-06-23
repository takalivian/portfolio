import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class List extends Component {
  style = {
    color: "#000",
    textDecoration: "none"
  };
  render() {
    return <div>
      <ul>
        <li class="active"><AnchorLink href='#about' style={this.style}>about</AnchorLink></li>
        <li class="active"><AnchorLink href='#skill' style={this.style}>skill</AnchorLink></li>
        <li class="active"><AnchorLink href='#work' style={this.style}>work</AnchorLink></li>
        <li class="active"><AnchorLink href='#contact' style={this.style}>contact</AnchorLink></li>
      </ul>
    </div>;
  }
}

function Header() {
  const style = {
    width: "100vw",
    height: "7vh",
    position: "fixed",
    top: "0",
    left: "0",
    color: "#000",
    alignItems: "center",
    zIndex: "1000"
  };
  return (
    <div className="Header">
      <div style={style}>
        <List />
      </div>
    </div>
  );
}

export default Header;