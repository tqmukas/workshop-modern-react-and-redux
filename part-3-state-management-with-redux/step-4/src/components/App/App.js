import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.png';
import HiddenText from '../HiddenText';
import Alphabet from '../Alphabet';
import Hangman from '../Hangman';
import {decrementLives} from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: []
    };
  }

  checkLetter(letter) {
    const {guesses} = this.state;
    const {text, lives, dispatch} = this.props;

    if (lives === 0) {
      return;
    }

    if (text.toLowerCase().indexOf(letter) === -1) {
      dispatch(decrementLives());
    }

    this.setState({
      guesses: [...guesses, letter]
    });
  }

  render() {
    const {guesses} = this.state;
    const {question, text, lives} = this.props;
    
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

function mapStateToProps({question, text, lives}) {
  return {question, text, lives};
}

export default connect(mapStateToProps)(App);
