import React, { Component } from 'react';
import './App.css';
import Lesson from './Lesson';
 
class Stitle extends Component {
  render() {
    return <div>
      <h1>skill</h1>
    </div>;
  }
}

class Main extends Component {
  titleStyle = {
    writingMode: "horizontal-tb",
    margin: "auto",
    width: "50vw",
    justifyContent: "space-between",
    display: "flex"
  }
  render() {
    const lessonList = [
      {
        name: 'フロントエンド',
        image: 'https://d2aj9sy12tbpym.cloudfront.net/assets/languages/lessons/react/study-d0bc37d45d9064855f9c40cfcc055c805bad6d1c5e6b0d1d8a7d4c98e8777bc3.svg',
        introduction: 'HTML、CSS、JavaScript、JQuery、React',
      },
      {
        name: 'バックエンド',
        image: 'https://d2aj9sy12tbpym.cloudfront.net/assets/languages/lessons/ruby/study-cd2d9d05688997aeea4607a53006b920cf0b36ea3985b4ec657da78730504843.svg',
        introduction: 'Ruby、Ruby on Rails',
      },
      {
        name: 'インフラ',
        image: 'https://wac-cdn.atlassian.com/dam/jcr:640ff6f6-3d74-48f3-8c3e-6dba96027cc3/illustrations-spot-Global%20network-%20check.svg?cdnVersion=1084',
        introduction: 'AWS、EC2、S3、Route53、ALB',
      },
      // {
      //   name: 'React',
      //   image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
      //   introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
      // },
    ];

    return (
      <div className='main-wrapper' style={this.titleStyle}>
        {lessonList.map((lessonItem) => {
          return (
            <Lesson
              name={lessonItem.name}
              image={lessonItem.image}
              introduction={lessonItem.introduction}
            />
          );
        })}
      </div>
    );
  }
}

function Skill() {
  const style = {
    writingMode: "vertical-rl"
  };
  return (
    <div className="App">
      <div style={style}>
        <Main />
        <Stitle />
      </div>
    </div>
  );
}
 
export default Skill;