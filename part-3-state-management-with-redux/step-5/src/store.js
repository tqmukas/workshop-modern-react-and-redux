import {createStore} from 'redux';

const initialState = {
  question: 'Former jedi knight who became a Sith Lord.',
  text: 'Count Dooku',
  guesses: [],
  lives: 6
};

function reducer(state = initialState, action) {
  const {type} = action;

  if (type === 'DECREMENT_LIVES') {
    const {lives} = state;
    return {...state, lives: lives - 1};
  } else if (type === 'GUESS_LETTER') {
    const guesses = [...state.guesses, action.payload];
    return {...state, guesses};
  }

  return state;
}

export default createStore(reducer);
