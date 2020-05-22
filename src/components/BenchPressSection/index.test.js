import React, { useRef } from 'react';

import { shallow } from 'enzyme';

import BenchPressSection from './index';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

describe('Bench Press Section', () => {
  const wrapper = shallow(<BenchPressSection />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should play video when user clicks on button', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);

    const mRef = { current: { play: jest.fn() } };
    useRef.mockReturnValueOnce(mRef);
    const wrapper = shallow(<BenchPressSection />);

    wrapper.find('button').simulate('click', {
      preventDefault: () => { }
    });

    expect(mRef.current.play).toHaveBeenCalled();
  });
});