/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import PokemonFilter from './PokemonFilter';

const renderPokemonFilter = args => {
  const defaultProps = {
    filter: 'All',
    changeFilter: () => { },
    pokeTypes: [],
  };

  const props = { ...defaultProps, ...args };
  return shallow(<PokemonFilter {...props} />);
};

it('renders a div', () => {
  const wrapper = renderPokemonFilter();
  expect(wrapper.find('div').length).toBe(1);
});

it('renders a label', () => {
  const wrapper = renderPokemonFilter();
  expect(wrapper.find('label').length).toBe(1);
});

it('renders a label with text type', () => {
  const wrapper = renderPokemonFilter();
  expect(wrapper.find('label').text().slice(0, 4)).toEqual('Type');
});

it('renders a select', () => {
  const wrapper = renderPokemonFilter();
  expect(wrapper.find('select').length).toBe(1);
});
