import React from 'react';
import PropTypes from 'prop-types';

HiddenText.propTypes = {
  question: PropTypes.string,
  text: PropTypes.string,
  guesses: PropTypes.array
};

function HiddenText({question, text, guesses}) {
  const placeholder = text.split('').map((char, index) => {
    const ch = char === ' ' || guesses.indexOf(char.toLowerCase()) > -1 ? char : '_';
    return (<span key={index}>{ch}</span>);
  });
  
  return (
    <div>
      <h1>{question}</h1>
      <p>{placeholder}</p>
    </div> 
  );
}

export default HiddenText;
