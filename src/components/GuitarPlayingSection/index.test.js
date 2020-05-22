import React from 'react';

import { shallow } from 'enzyme';

import GuitarPlayingSection from './index';

describe('GuitarPlayingSection Section', () => {
  const wrapper = shallow(<GuitarPlayingSection />);

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render gif', () => {
    const gif = wrapper.find('img');
    expect(gif).toBeTruthy();
  });
});