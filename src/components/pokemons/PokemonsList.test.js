/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from './PokemonsList';

const renderPokemonsList = args => {
  const defaultProps = {
    pokemons: [],
  };

  const props = { ...defaultProps, ...args };
  return shallow(<PokemonList {...props} />);
};

it('renders a ul', () => {
  const wrapper = renderPokemonsList();
  expect(wrapper.find('ul').length).toBe(1);
});

it('renders a li', () => {
  const wrapper = renderPokemonsList();
  expect(wrapper.find('li'));
});

it('renders a a element', () => {
  const wrapper = renderPokemonsList();
  expect(wrapper.find('a'));
});
