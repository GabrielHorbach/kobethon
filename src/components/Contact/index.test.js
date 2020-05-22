import React from 'react';

import { shallow } from 'enzyme';

import Contact from './index';

describe('Contact Section', () => {
  const wrapper = shallow(<Contact />);

  it('should render title', () => {
    const h2 = wrapper.find('h2');
    expect(h2.text()).toBe('Me encontre aqui');
  });

  it('should render image links', () => {
    const svgs = wrapper.find('svg');
    expect(svgs).toBeTruthy();
  });
});