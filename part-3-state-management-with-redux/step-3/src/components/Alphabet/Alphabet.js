import React from 'react';
import PropTypes from 'prop-types';

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

Alphabet.propTypes = {
  onLetterClick: PropTypes.func,
  guesses: PropTypes.array
};

function Alphabet({onLetterClick, guesses}) {
  const buttons = letters.map((letter, index) => {
    return (<button
      key={index}
      disabled={guesses.indexOf(letter) > -1}
      onClick={() => onLetterClick(letter)}
      >{letter}</button>);
  });

  return (
    <div>{buttons}</div>
  );
}

export default Alphabet;
