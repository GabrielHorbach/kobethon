import React from 'react';

import { shallow } from 'enzyme';

import ReadingSection from './index';

describe('ReadingSection Section', () => {
  const wrapper = shallow(<ReadingSection />);

  it('should render without errors', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render gif', () => {
    const gif = wrapper.find('img');
    expect(gif).toBeTruthy();
  });
});