import React, { Component } from 'react';
import './App.css';

class List extends Component {
  render() {
    return <div>
      <ul>
        <li id="list1">about</li>
        <li id="list2">skill</li>
        <li>work</li>
        <li>contact</li>
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