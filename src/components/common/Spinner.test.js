/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

const renderSpinner = () => shallow(<Spinner />);

it('renders a div', () => {
  const wrapper = renderSpinner();
  expect(wrapper.find('div').length).toBe(1);
});

it('renders a div with class loader', () => {
  const wrapper = renderSpinner();
  expect(wrapper.find('.loader').length).toBe(1);
});
