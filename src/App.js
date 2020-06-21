import React, { Component } from 'react';
import Sample from './sample';
import './App.css';
 
class Name extends Component {
  render() {
    return <div>
      <h1>Yoshifumi Takamura</h1>
    </div>;
  }
}

function App() {
  const style = {
    writingMode: "vertical-rl"
  };
  return (
    <div className="App">
      <div style={style}>
        <Sample />
        <Name />
      </div>
    </div>
  );
}
 
export default App;