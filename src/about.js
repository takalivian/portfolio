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
        <img src="IMG_1226.jpeg" width="490" style={this.imageStyle} />
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
      <p>2009年より単身アフリカへ</p>
      <p>以来アフリカをはじめとする世界中の少数民族を撮影、発表。</p>
      <p>唯一無二の色彩と直感的な生き方が評価され</p>
      <p>2017年日経ビジネス誌で「次代を創る100人」へ選出</p>
      <p>また同年、講談社出版文化賞 写真賞を受賞</p>
    </div>
  }
}

function About() {
  const style = {
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