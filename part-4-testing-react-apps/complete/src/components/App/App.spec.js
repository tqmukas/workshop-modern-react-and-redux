import React from 'react';
import {mount} from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';
import Hangman from '../Hangman';
import HiddenText from '../HiddenText';
import store from '../../store';

const mock = new MockAdapter(axios);
const subject = {text: 'foo', question: 'bar'};
mock.onGet('/data.json').reply(200, [subject]);

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App store={store}/>);
  });

  it('should render logo', () => {
    expect(wrapper.childAt(0).prop('src')).toBe('logo.png');
  });

  it('should render 26 letters', () => {
    expect(wrapper.find('button')).toHaveLength(26);
  });

  it('should render 6 lives', () => {
    expect(wrapper.find(Hangman).text()).toContain('6');
  });

  it('should reveal a letter on successful guess', done => {
    setImmediate(() => {
      wrapper.find('button').at(5).simulate('click');
      expect(wrapper.find(HiddenText).text()).toContain('f__');
      done();
    });
  });

  it('should decrement lives after unsuccessful guess', done => {
    setImmediate(() => {
      wrapper.find('button').at(0).simulate('click');
      expect(wrapper.find(Hangman).text()).toContain('5');
      done();
    });
  });
});
