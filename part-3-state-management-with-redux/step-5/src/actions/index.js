export function decrementLives() {
  return {type: 'DECREMENT_LIVES'};
}

export function guessLetter(letter) {
  return {type: 'GUESS_LETTER', payload: letter};
}
