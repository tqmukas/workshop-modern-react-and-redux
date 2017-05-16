import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  question: null,
  text: null,
  guesses: [],
  lives: 6
};

function reducer(state = initialState, action) {
  const {type, payload} = action;

  if (type === 'DECREMENT_LIVES') {
    const {lives} = state;
    return {...state, lives: lives - 1};
  } else if (type === 'GUESS_LETTER') {
    const guesses = [...state.guesses, payload];
    return {...state, guesses};
  } else if (type === 'DATA_LOADED') {
    const index = Math.floor(Math.random() * payload.length);
    const {text, question} = payload[index];
    return {...state, subjects: payload, text, question};
  }

  return state;
}

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);
