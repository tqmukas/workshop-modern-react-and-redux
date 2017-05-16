import {createStore} from 'redux';

const initialState = {
  question: 'Former jedi knight who became a Sith Lord.',
  text: 'Count Dooku',
  guesses: [],
  lives: 6
};

function reducer(state = initialState) {
  return state;
}

export default createStore(reducer);
