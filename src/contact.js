import React, { Component } from 'react';
import './App.css';
import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
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

class Footer extends Component {
  style = {
    cursor: "pointer",
    fontSize: "xxx-large",
    color: "#000",
    position: "absolute",
    right: "10%",
    top: "45%"
  };

  scrollToTop = () => {
    scroll.scrollToTop(); 
  };
  render() {
    return <div style={this.style} onClick={this.scrollToTop}>
      <FontAwesomeIcon icon={['fa', 'arrow-up']} />
    </div>;
  }
}

function Contact() {
  const style = {
    letterSpacing: "0.1rem",
    writingMode: "vertical-rl",
    width: "18rem"
  };
  return (
    <div className="App">
      <div style={style}>
        <Footer />
        <Cimage />
        <Ctitle />
      </div>
    </div>
  );
}
 
export default Contact;