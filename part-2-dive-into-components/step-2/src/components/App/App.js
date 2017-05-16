import React, {Component} from 'react';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Hangman Game"/>
        <p>Proudly made with React!</p>
      </div>
    );
  }
}

export default App;
