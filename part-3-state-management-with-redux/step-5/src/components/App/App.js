import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';
import Hangman from '../Hangman';
import {decrementLives, guessLetter} from '../../actions';

class App extends Component {
  checkLetter(letter) {
    const {text, lives, dispatch} = this.props;

    if (lives === 0) {
      return;
    }

    if (text.toLowerCase().indexOf(letter) === -1) {
      dispatch(decrementLives());
    }

    dispatch(guessLetter(letter));
  }

  render() {
    const {question, text, lives, guesses} = this.props;
    
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

function mapStateToProps({question, text, lives, guesses}) {
  return {question, text, lives, guesses};
}

export default connect(mapStateToProps)(App);
