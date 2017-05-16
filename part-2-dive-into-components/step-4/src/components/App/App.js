import React, {Component} from 'react';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Former jedi knight who became a Sith Lord.',
      text: 'Count Dooku'
    };
  }

  checkLetter(letter) {
    console.log(letter);
  }

  render() {
    const {question, text} = this.state;
    
    return (
      <div>
        <img src={logo} alt="Hangman Game"/>
        <HiddenText question={question} text={text}/>
        <Alphabet onLetterClick={this.checkLetter.bind(this)}/>
      </div>
    );
  }
}

export default App;
