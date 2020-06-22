import React, { Component } from 'react';
import './App.css';
 
class Ctitle extends Component {
  render() {
    return <div>
      <h1>contact</h1>
    </div>;
  }
}

class Cimage extends Component {
  render() {
    return <div>
      <a href="https://twitter.com/takapro_913"><div class="twitter"></div></a>
      <a href="https://github.com/takalivian"><div class="github"></div></a>
    </div>;
  }
}

function Contact() {
  const style = {
    writingMode: "vertical-rl",
    width: "18rem"
  };
  return (
    <div className="App">
      <div style={style}>
        <Cimage />
        <Ctitle />
      </div>
    </div>
  );
}
 
export default Contact;