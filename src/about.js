import React, { Component } from 'react';
import './App.css';
 
class Atitle extends Component {
  render() {
    return <div>
      <h1>about</h1>
    </div>;
  }
}

class Aimage extends Component {
  imageStyle = {
    border: "10px solid white"
  };
  render() {
    return <div class="a-image">
      <a href="IMG_1226.jpeg" data-lightbox="group">
        <img src="IMG_1226.jpeg" alt="" width="490" style={this.imageStyle} />
        </a>
    </div>
  }
}

class Aabout extends Component {
  titleStyle = {
    writingMode: "horizontal-tb",
    marginRight: "20%"
  };
  render() {
    return <div style={this.titleStyle}>
      <h1>高村 尚郁</h1>
      <br></br>
      <p>1994年 9月13日 生まれ</p>
      <p>2017年大学卒業後、化学品商社に入社。</p>
      <p>事務職として約４年間務めました。</p>
      <p>退職後はプログラミングスクールに通い、</p>
      <p>HTML・CSS・JavaScript・JQuery・Ruby・Railsを学んだ。</p>
      <p>現在はReactを独学で習得中。</p>
    </div>
  }
}

function About() {
  const style = {
    letterSpacing: "0.1rem",
    writingMode: "vertical-rl"
  };
  return (
    <div className="App">
      <div style={style}>
        <Aimage />
        <Aabout />
        <Atitle />
      </div>
    </div>
  );
}
 
export default About;