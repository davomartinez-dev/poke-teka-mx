/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

const renderNavbar = () => shallow(<Navbar />);

it('renders a nav', () => {
  const wrapper = renderNavbar();
  expect(wrapper.find('nav').length).toBe(1);
});

it('renders 3 NavLinks', () => {
  const numLinks = shallow(<Navbar />).find('NavLink').length;
  const first = shallow(<Navbar />).find('NavLink').at(0);
  const second = shallow(<Navbar />).find('NavLink').at(1);
  const third = shallow(<Navbar />).find('NavLink').at(2);
  expect(numLinks).toEqual(3);
  expect(first.text()).toEqual('<NavLink />');
  expect(second.text()).toEqual('<NavLink />');
  expect(third.text()).toEqual('<NavLink />');
});
