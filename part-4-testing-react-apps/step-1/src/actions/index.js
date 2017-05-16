import axios from 'axios';

export function decrementLives() {
  return {type: 'DECREMENT_LIVES'};
}

export function guessLetter(letter) {
  return {type: 'GUESS_LETTER', payload: letter};
}

export function fetchData() {
  return dispatch =>
    axios.get('/data.json')
      .then(response =>
        dispatch({type: 'DATA_LOADED', payload: response.data}));
}
