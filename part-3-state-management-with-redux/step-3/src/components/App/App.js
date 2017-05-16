import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';
import Hangman from '../Hangman';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      lives: 6
    };
  }

  checkLetter(letter) {
    const {guesses, lives} = this.state;
    const {text} = this.props;
    
    if (lives > 0) {
      this.setState({
        guesses: [...guesses, letter],
        lives: text.toLowerCase().indexOf(letter) > -1 ? lives : lives - 1
      });
    }
  }

  render() {
    const {guesses, lives} = this.state;
    const {question, text} = this.props;
    
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

function mapStateToProps({question, text}) {
  return {question, text};
}

export default connect(mapStateToProps)(App);
