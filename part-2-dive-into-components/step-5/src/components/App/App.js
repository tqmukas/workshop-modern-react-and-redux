import React, {Component} from 'react';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: 'Former jedi knight who became a Sith Lord.',
      text: 'Count Dooku',
      guesses: []
    };
  }

  checkLetter(letter) {
    const {guesses} = this.state;
    this.setState({guesses: [...guesses, letter]});
  }

  render() {
    const {question, text, guesses} = this.state;
    
    return (
      <div>
        <img src={logo} alt="Hangman Game"/>
        <HiddenText question={question} text={text} guesses={guesses}/>
        <Alphabet onLetterClick={this.checkLetter.bind(this)} guesses={guesses}/>
      </div>
    );
  }
}

export default App;
