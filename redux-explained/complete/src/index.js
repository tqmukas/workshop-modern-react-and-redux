import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';


function reducer(state = {num: 0}, action) {
  if (action.type === 'INC') {
    const num = state.num + action.payload;
    return {...state, num};
  } else if (action.type === 'DEC') {
    const num = state.num - action.payload;
    return {...state, num};
  }
  return state;
}

const middleware = applyMiddleware(createLogger());
const store = createStore(reducer, middleware);

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 22});
store.dispatch({type: 'INC', payload: 9});
store.dispatch({type: 'DEC', payload: 500});
