import React, {Component} from 'react';
import logo from './logo.png';
import HiddenText from '../HiddenText';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Former jedi knight who became a Sith Lord.',
      text: 'Count Dooku'
    };
  }

  render() {
    const {question, text} = this.state;
    
    return (
      <div>
        <img src={logo} alt="Hangman Game"/>
        <HiddenText question={question} text={text}/>
      </div>
    );
  }
}

export default App;
