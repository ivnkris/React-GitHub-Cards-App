import React from 'react';
import './App.css';

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        One GitHub Profile...
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

export default App;
