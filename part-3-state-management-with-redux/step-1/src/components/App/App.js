import React, {Component} from 'react';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';
import Hangman from '../Hangman';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Former jedi knight who became a Sith Lord.',
      text: 'Count Dooku',
      guesses: [],
      lives: 6
    };
  }

  checkLetter(letter) {
    const {text, guesses, lives} = this.state;
    
    if (lives > 0) {
      this.setState({
        guesses: [...guesses, letter],
        lives: text.toLowerCase().indexOf(letter) > -1 ? lives : lives - 1
      });
    }
  }

  render() {
    const {question, text, guesses, lives} = this.state;
    
    return (
      <div>
        <img src={logo} alt="Hangman Game"/>
        <HiddenText question={question} text={text} guesses={guesses}/>
        <Hangman lives={lives}/>
        <Alphabet onLetterClick={this.checkLetter.bind(this)} guesses={guesses}/>
      </div>
    );
  }
}

export default App;
