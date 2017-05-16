import React from 'react';
import {shallow} from 'enzyme';
import HiddenText from './HiddenText';

describe('HiddenText', () => {
  it('should render hidden text', () => {
    const wrapper = shallow(<HiddenText text="foo" guesses={[]}/>);
    expect(wrapper.childAt(1).text()).toBe('___');
  });

  it('should reveal some letters', () => {
    const wrapper = shallow(<HiddenText text="foo" guesses={['o']}/>);
    expect(wrapper.childAt(1).text()).toBe('_oo');
  });
});
