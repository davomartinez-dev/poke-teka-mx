const authors = [
  { id: 1, name: 'Cory House' },
  { id: 2, name: 'Scott Allen' },
  { id: 3, name: 'Dan Wahlin' },
];

const newPokemon = {
  id: null,
  name: 'example',
  order: null,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPokemon,
  authors,
};
