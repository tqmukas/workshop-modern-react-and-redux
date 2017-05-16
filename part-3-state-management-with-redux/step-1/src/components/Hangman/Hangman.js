import React from 'react';
import PropTypes from 'prop-types';
import hangman0 from './hangman0.png';
import hangman1 from './hangman1.png';
import hangman2 from './hangman2.png';
import hangman3 from './hangman3.png';
import hangman4 from './hangman4.png';
import hangman5 from './hangman5.png';
import hangman6 from './hangman6.png';

const hangman = [hangman0, hangman1, hangman2, hangman3, hangman4, hangman5, hangman6];

Hangman.propTypes = {
  lives: PropTypes.number
};

function Hangman({lives}) {
  return (
    <div>
      <p>Lives left: {lives}</p>
      <img src={hangman[lives]} alt="Hangman"/>
    </div>
  );
}

export default Hangman;
