import React from 'react';
import {mount} from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import App from './App';
import Hangman from '../Hangman';
import store from '../../store';

const mock = new MockAdapter(axios);
const subject = {text: 'foo', question: 'bar'};
mock.onGet('/data.json').reply(200, [subject]);

describe('App', () => {
  it('should render logo', () => {
    const wrapper = mount(<App store={store}/>);
    expect(wrapper.childAt(0).prop('src')).toBe('logo.png');
  });

  it('should render 26 letters', () => {
    const wrapper = mount(<App store={store}/>);
    expect(wrapper.find('button')).toHaveLength(26);
  });

  it('should render 6 lives', () => {
    const wrapper = mount(<App store={store}/>);
    expect(wrapper.find(Hangman).text()).toContain('6');
  });
});
