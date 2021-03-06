import React, { Component } from 'react';
import './App.css';
// import SimpleSlider from "./slider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
class Wtitle extends Component {
  render() {
    return <div>
      <h1>work</h1>
    </div>;
  }
}

class Web extends Component {
  titleStyle = {
    writingMode: "horizontal-tb",
    display: "flex",
    width: "60vw",
    margin: "auto"
  };
  marginStyle = {
    marginRight: "10%"
  };
  linkStyle = {
    color: "#fff",
    height: "fit-content",
    textDecoration: "none"
  };
  render() {
    return <div style={this.titleStyle}>
      <div style={this.marginStyle}>
        <h1>Men's Cosmetic</h1>
        <div class="mencos-img">
          <div class="mask">
            <div class="caption">
              <a href="https://github.com/takalivian/mencos" style={this.linkStyle}>GitHub</a>
              <a href="https://www.mencos-t.com/" style={this.linkStyle}>サイト</a>
            </div>
          </div>
        </div>
        <p>2020-6</p>
        <p>メンズ専用のコスメレビューサイトです。</p>
      </div>
      <div>
        <h1>Matching Baseball</h1>
        <div class="baseball-img">
          <div class="mask">
            <div class="caption">
              <a href="https://github.com/takalivian/B-salon" style={this.linkStyle}>GitHub</a>
              <a href="http://matchingbaseball.tokyo/" style={this.linkStyle}>サイト</a>
            </div>
          </div>
        </div>
        <p>2020-4</p>
        <p>草野球チームのマッチングサイトです。</p>
      </div>
    </div>;
  }
}

function Work() {
  const style = {
    letterSpacing: "0.1rem",
    writingMode: "vertical-rl"
  };
  return (
    <div className="App">
      <div style={style}>
        <Web />
        {/* <SimpleSlider /> */}
        <Wtitle />
      </div>
    </div>
  );
}
 
export default Work;