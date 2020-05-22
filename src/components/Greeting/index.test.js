import React from 'react';

import { shallow } from 'enzyme';

import Greeting from './index';

describe('Greeting Section', () => {
  const wrapper = shallow(<Greeting />);

  it('should render header containing greeting', () => {
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('Olá!');
  });
});