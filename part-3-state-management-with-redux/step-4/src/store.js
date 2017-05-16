import {createStore} from 'redux';

const initialState = {
  question: 'Former jedi knight who became a Sith Lord.',
  text: 'Count Dooku',
  guesses: [],
  lives: 6
};

function reducer(state = initialState, action) {
  if (action.type === 'DECREMENT_LIVES') {
    const {lives} = state;
    return {...state, lives: lives - 1};
  }

  return state;
}

export default createStore(reducer);
